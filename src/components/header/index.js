import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BackGround,
    Container,
    Logo,
    ButtonLinks,
    Feature,
    Text,
    TextSmall,
    TextLink,
    Group,
    Picture,
    Profile,
    DropDown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./styles/style";
export default function Header({ bg = true, children, ...restpros }) {
    return bg ? <BackGround {...restpros}>{children}</BackGround> : children;
}

Header.Feature = function HeaderFeature({ children, ...restpros }) {
    return <Feature {...restpros}>{children}</Feature>;
};
Header.Profile = function HeaderProfile({ children, ...restpros }) {
    return <Profile {...restpros}>{children}</Profile>;
};
Header.DropDown = function HeaderDropDown({ children, ...restpros }) {
    return <DropDown {...restpros}>{children}</DropDown>;
};
Header.Picture = function HeaderPicture({ src, ...restpros }) {
    return <Picture {...restpros} src={src} />;
};
Header.PlayButton = function HeaderPlayButton({children}) {
    return <PlayButton > {children}</PlayButton>;
};
Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restprops
}) {
    const [searchActive, setsearchActive] = useState(false);
    return (
        <Search {...restprops}>
            <SearchIcon
                onClick={() => setsearchActive((searchActive) => !searchActive)}
            >
                <img src="/images/icons/search.png" alt="Search Icon" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder={"Search Films and Series"}
                active={searchActive}
            />
        </Search>
    );
};

Header.Text = function HeaderText({ children, ...restprops }) {
    return <Text {...restprops}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restprops }) {
    return <TextLink {...restprops}>{children}</TextLink>;
};

Header.TextSmall = function HeaderTextSmall({ children, ...restprops }) {
    return <TextSmall {...restprops}>{children}</TextSmall>;
};

Header.Logo = function HeaderLogo({ to, ...restpros }) {
    return (
        <Link to={to}>
            <Logo {...restpros} />
        </Link>
    );
};

Header.Frame = function HeaderFrame({ children, ...restpros }) {
    return <Container {...restpros}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restpros }) {
    return <Group {...restpros}>{children}</Group>;
};

Header.ButtonLink = function ButtonLink({ children, ...restpros }) {
    return <ButtonLinks {...restpros}>{children}</ButtonLinks>;
};
