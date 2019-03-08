import axios from 'axios'
import { Location } from 'expo';
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types'
import qs from 'qs'
import JOB_DATA from './Job_data.json'

const JOB_ROOTURL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '', //code
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}



const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip})
    return `${JOB_ROOTURL}${query}`
}

export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        let zip = await Location.reverseGeocodeAsync(region);
        const url = buildJobsUrl(zip);
        //let { data } = await axios.get(url);
        let data = JOB_DATA;

        dispatch({ type: FETCH_JOBS, payload: data });
        callback();
    }
    catch (e) {
        console.error(e);
    }    
}

export const likeJobs = (job) => {
    return {
        type: LIKE_JOB,
        payload: job
    }
}

export const clearLikedJobs = () => {
    return { type: CLEAR_LIKED_JOBS };
}



