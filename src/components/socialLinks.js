import socialLinkStruct from './socialLinks.html';

export const buildSocialLinkDiv = function () {
    const component = document.createElement('div');
    component.innerHTML = socialLinkStruct;
    return component;
}