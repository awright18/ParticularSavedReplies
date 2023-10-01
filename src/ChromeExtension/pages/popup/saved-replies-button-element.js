import { createElement } from "../../js/modules/create-element.js";


const createPencilSvg = () => {

    let svgFill = "none"; 
    let xmlns = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(xmlns,"svg");    
    svg.setAttributeNS(null, "height", 20);
    svg.setAttributeNS(null,"width", 20);
    svg.setAttributeNS(null, "viewBox", "0 0 24 24");
    svg.setAttributeNS(null,"fill", svgFill);
   
    let firstPath = document.createElementNS(xmlns, "path");
    let firstPathCoords = "M4.33295 16.048L16.5714 3.80952C17.5708 2.81015 19.1911 2.81015 20.1905 3.80952C21.1898 4.8089 21.1898 6.4292 20.1905 7.42857L7.952 19.667C7.6728 19.9462 7.3172 20.1366 6.93002 20.214L3 21L3.786 17.07C3.86344 16.6828 4.05375 16.3272 4.33295 16.048Z";
    firstPath.setAttributeNS(null, "d", firstPathCoords);
    firstPath.setAttributeNS(null,"stroke", "#000000");
    firstPath.setAttributeNS(null,"stroke-width","2");
    firstPath.setAttributeNS(null,"stroke-linecap","round");
    firstPath.setAttributeNS(null,"stroke-linejoin","round");

    let secondPath = document.createElementNS(xmlns, "path");
    let secondPathCoords = "M14.5 6.5L17.5 9.5";
    secondPath.setAttributeNS(null, "d", secondPathCoords);
    secondPath.setAttributeNS(null,"stroke", "#000000");
    secondPath.setAttributeNS(null,"stroke-width","2");

    svg.appendChild(firstPath);
    svg.appendChild(secondPath);

    return svg;
}

const createTrashCanSvg = () => {

    let svgFill = "#000000"; 
    let xmlns = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(xmlns,"svg");    
    svg.setAttributeNS(null, "height", 20);
    svg.setAttributeNS(null,"width", 20);
    svg.setAttributeNS(null, "viewBox", "0 0 56 56");
    svg.setAttributeNS(null,"fill", svgFill);
   
    let path = document.createElementNS(xmlns, "path");
    let pathCoords = "M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z";
    path.setAttributeNS(null, "d", pathCoords);

    svg.appendChild(path);

    return svg;
}


const createConfigButton = (config) => {

    const owner = config.allowEverywhere ? `github` : config.limitToGitHubOwner;

    const url = config?.url.replace(`https://github.com/`,``);//.slice(0,25);

    const configButtonElement =
        createElement(`div`, {
            children: [
                createElement(`div`, {
                    children: [
                        createElement(`div`, {
                            children: [
                                createElement(`button`, {
                                    children: [
                                        createElement(`div`, {
                                            children: [
                                                createElement(`div`, {
                                                    children: [
                                                        createElement(`img`, {
                                                            children: [],
                                                            className: `saved-replies-button-icon`,
                                                            src: `https://github.com/${owner}.png`
                                                        },)
                                                    ],
                                                    className: `saved-replies-button-icon-inner-container`
                                                })
                                            ],
                                            className: `saved-replies-button-icon-container`,
                                        }),
                                        createElement(`div`, {
                                            children: [
                                                createElement(`div`, {
                                                    children: [
                                                        createElement(`div`, {
                                                            children: [
                                                                createElement(`div`, {
                                                                    children: [
                                                                        `${config.name}`
                                                                    ],
                                                                    className: `saved-replies-button-header-text`
                                                                }),
                                                                createElement(`div`, {
                                                                    children: [`Launch`],
                                                                    className: `saved-replies-button-header-text-tooltip`
                                                                })
                                                            ],
                                                            className: `saved-replies-button-header`
                                                        }),
                                                        createElement(`div`, {
                                                            children: [`${url}`],
                                                            className: `saved-replies-button-subheader`
                                                        })
                                                    ],
                                                    className: `saved-replies-button-content-inner-container`
                                                })
                                            ],
                                            className: `saved-replies-button-content-outer-container`
                                        })
                                    ],
                                    className: `saved-replies-button`,
                                    type: `button`,
                                    tabindex: `0`
                                })
                            ],
                            className: `saved-replies-button-container`
                        }),
                        createElement(`div`, {
                            children: [
                                createElement(`div`, {
                                    children: [
                                        createElement(`div`,{
                                            children:[
                                                createElement(`button`,{
                                                    children:[
                                                        createPencilSvg()
                                                    ],
                                                    className:`saved-replies-edit-button`,
                                                    type:`button`,
                                                    tabindex:-1
                                                })
                                            ],
                                            className:``
                                        }),
                                        createElement(`div`, {
                                            children: [
                                                createElement(`button`, {
                                                    children: [
                                                        createTrashCanSvg()
                                                    ],
                                                    className: `saved-replies-delete-button`,
                                                    type: `button`,
                                                    tabindex: `-1`
                                                })
                                            ],
                                            className: ``
                                        })
                                    ],
                                    className: `saved-replies-action-items-inner-container`
                                })
                            ],
                            className: `saved-replies-action-items-container`
                        })
                    ],
                    className: `saved-replies-container`
                })
            ],
            className: ``
        });
    return configButtonElement;
}

export { createConfigButton }