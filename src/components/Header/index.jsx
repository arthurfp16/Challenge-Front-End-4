import React from 'react'

import './style.css'

import homeIcon from '../../img/icons/home-icon.svg'
import postsIcon from '../../img/icons/posts-icon.svg'
import userIcon from '../../img/icons/user-icon.svg'

export function Header({ showUserIcon, userImg }) {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <a href="/" className='header__anchor' tabIndex={0}>
                    <img src={homeIcon} alt="home"/>
                </a>
                <a href="/" className='header__anchor' tabIndex={0}>
                    <img src={postsIcon} alt="mensagens"/>
                </a>

                {( showUserIcon || userImg ) && <a href="/" className='header__anchor--big' tabIndex={0}>
                        <img src={userImg ? userImg : userIcon} alt="user"/>
                    </a>}

            </nav>
        </header>
    )
}