import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({ children }) =>
    <div style={{height:`100%`}}>
        <div style={{ height: '25%', margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>Amazing Cookbok!</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Cooking</ListLink>
                    <ListLink to="/">Cooking</ListLink>
                    <ListLink to="/">Cooking</ListLink>
                </ul>
            </header>
            <div style={{height: '50%',}}>
                {children()}
            </div>
        </div>
        <div style={{ height: '25%', margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
            <h3>footer</h3>
        </div>
    </div>