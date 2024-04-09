export interface NavigationModel {
        icon: JSX.Element;
        texto: string;
        url: string;
        items: {
            icon: string;
            texto: string;
            url: string;
        }[];
    }