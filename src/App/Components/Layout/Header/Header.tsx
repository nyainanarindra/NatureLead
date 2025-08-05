

import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { AppContext } from '../../../Context/AppContext';
import { Menu, MenuItem } from '../../../Types/menu';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    return <div>Chargement...</div>;
  }

  const { menus, locales } = context;
  const [menuHierarchy, setMenuHierarchy] = useState<MenuItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false); // État pour suivre le scroll

  const buildMenuHierarchy = (apiResponse: Menu[]): MenuItem[] => {
    const itemsMap = new Map<number, MenuItem>();
    const rootItems: MenuItem[] = [];

    apiResponse.forEach((item) => {
      itemsMap.set(item.id, {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        locale: item.locale,
        children: [],
      });
    });

    apiResponse.forEach((item) => {
      if (item.parent?.id) {
        const parent = itemsMap.get(item.parent.id);
        if (parent) {
          parent.children.push(itemsMap.get(item.id)!);
        }
      } else {
        rootItems.push(itemsMap.get(item.id)!);
      }
    });

    return rootItems;
  };

  useEffect(() => {
    if (menus.length > 0) {
      const hierarchy = buildMenuHierarchy(menus);
      setMenuHierarchy(hierarchy);
    }
  }, [menus]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-stretch justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="/img/logoNaturelead.jpg" alt="Logo" className={isScrolled ? "logo-small" : ""} />
          <h1 className="sitename">NatureLEAD</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            {menuHierarchy.map((menu) => (
              <li key={menu.id} className="dropdown position-relative">
                {/* <a href={`#${menu.title}`}>
                  <span>{menu.title}</span>
                  {menu.children.length > 0 && <i className="bi bi-chevron-down toggle-dropdown"></i>}
                </a> */}
                <Link to={`/${menu.title}`}>
                  <span>{menu.title}</span>
                  {menu.children.length > 0 && <i className="bi bi-chevron-down toggle-dropdown"></i>}
                </Link>
                {menu.children.length > 0 && (
                  <ul>
                    {menu.children.map((child) => (
                      <li key={child.id}>
                        <a href={`#${child.title}`}>{child.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="position-relative">
              <select className="language-switch">
                {locales && locales.length > 0 && locales.map((locale) => (
                  <option key={locale.code} value={locale.code}>
                    {locale.code.toUpperCase()}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

