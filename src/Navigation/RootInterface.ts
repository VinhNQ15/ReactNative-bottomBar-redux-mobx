import { NavigationProp, RouteProp,useRoute } from "@react-navigation/native";

export type HomeStackParamList = {
    SCREEN_HOME: undefined;
    HomeDetail:{ testData: string };
    Confirm: undefined;
};


export interface HomeStackProps {

    navigation: NavigationProp<HomeStackParamList, any>;

    route: RouteProp<HomeStackParamList, any>;

}