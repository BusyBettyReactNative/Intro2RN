
//the js file will need the following import at the top of the page:
import { Platform } from 'react-native';

//use the following if the android and iOS functionality is shared
switch (Platform.OS) {
    case 'windows':
        return // windows specific
    default:
        return // return specific items for both android and iOS.
}

//use the following if each environments needs their own specific type of functionality.
switch (Platform.OS) {
    case 'windows':
        return // windows specific
    case 'ios':
        return // return specific items for iOS.
    case 'android':
        return //return specific item for android
}