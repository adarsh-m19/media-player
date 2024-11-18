//save video
//save video api call by add.jsx

import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"


export const addVideo=async(video)=>{
  return await  commonAPI("POST",`${SERVER_URL}/allVideos`,video)

}


//fetch video

export const getAllVideos=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//deleting video

export const deleteVideo=async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

//api call for save history
export const saveHistory=async(video)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//api call for get history
export const getAllHistory=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//api call for deleting history

export const deleteHistory=async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//api call for add category

export const addCategory=async(categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}

//api call for get category
export const getAllCategory=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}

