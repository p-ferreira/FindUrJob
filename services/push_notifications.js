import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'
import axios from 'axios'

const PUSH_ENDPOINT = '' // token endpoint

export default async () => { 
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);
    if(previousToken){
        return;
    } else{       
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);  
        console.log("@");
        if(status !== 'granted')
            return;

        let token = await Notifications.getExpoPushTokenAsync();
        await axios.post(PUSH_ENDPOINT, { token: { token }});

        AsyncStorage.setItem('pushtoken', token);
    }


}