import React from 'react';
import avatar from '../img/avatar.jpg'


const Main = () => {
    return (
        <main className='main'>
            <div className="wrapper">
                <div className="main__content">
                    <aside className="sidebar1">
                        <nav className="sidebar1__nav">
                            <div className="sidebar1__nav-item sidebar1__nav-item-page"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Моя страница</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-news"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Новости</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item  sidebar1__nav-item-messages"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Сообщения</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-friends"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Друзья</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-community"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Сообщества</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-photos"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Фотографии</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-music"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Музыка</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-videos"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Видео</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-games"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Игры</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                        </nav>
                        <div className="sidebar1__underline"/>
                        <nav className="sidebar1__nav">
                            <div className="sidebar1__nav-item sidebar1__nav-item-pay"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>AVVK Pay</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                        </nav>
                        <div className="sidebar1__underline"/>
                        <nav className="sidebar1__nav">
                            <div className="sidebar1__nav-item sidebar1__nav-item-goods"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Товары</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                            <div className="sidebar1__nav-item sidebar1__nav-item-bookmarks"><a href="#!" className="sidebar1__nav-link"/>
                                <div className="sidebar1__nav-item-pc"><img src="" alt="" className="sidebar1__nav-item-img"/>
                                </div>
                                <div className="sidebar1__nav-desc"><span>Закладки</span></div>
                                <div className="sidebar1__nav-count"/>
                            </div>
                        </nav>
                        <div className="sidebar1__nginx">
                            <span>Powered by NGINX</span>
                        </div>
                        <div className="sidebar1__adunit"/>
                    </aside>
                    <aside className="sidebar2">
                        <div className="sidebar2__photo-block">
                            <div className="sidebar2__photo-block-pic">
                                <img src={avatar} alt="photo" className="sidebar2__photo-block-img"/>
                            </div>
                            <div className="sidebar2__photo-block_menu">
                                <div className="sidebar2__photo-block_menu-item">
                                    <a href="#!" className='sidebar2__photo-block_menu-link'>Редактировать</a>
                                </div>
                                <div className="sidebar2__photo-block_menu-item"></div>
                            </div>
                        </div>
                        <div className="sidebar2__friend"></div>
                        <div className="sidebar2__subscriptions"></div>
                    </aside>
                    <div className="main__section">
                        <div className="main__section_profile-data">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )};

export default Main;