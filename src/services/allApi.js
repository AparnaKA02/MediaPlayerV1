//  define all api for project, it calls commonAPI function


import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//  uploadvideo api - api must call by Add Component
export const uploadVideoAPI = async (video)=>{
  return await commonAPI("POST",`${SERVER_URL}/allVideo`,video)
}
// getAllVideoAPI - called by view component
export const getAllVideoAPI = async()=>{
return await commonAPI("GET",`${SERVER_URL}/allVideo`,"")
}

// saveHistory API - called by VideoCard
 export const saveHistoryAPI = async(videoDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
 }

 //getHistoryAPI - called by History
 export const getHistoryAPI = async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }
 //removeHistoryAPI - called by history
 export const removeHistoryAPI = async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
 }
//  removeVideoAPI  -called by VideoCard
export const removeVideoAPI= async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allVideo/${id}`,{})
}
// addCategoryAPI -called by category
export const addCategoryAPI= async (categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// getCategoryAPI -called by category
export const getAllCategoryAPI= async ()=>{
  return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}
//  removeCategoryAPI  -called by categories
export const removeCategoryAPI= async(id)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}
//getSingleVideoAPI - called by category
export const getSingleVideoAPI =async(id)=>{
  return await commonAPI("GET",`${SERVER_URL}/allVideo/${id}`,"")
}
// updateCategoryAPI - called by category
export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

// getSingleCategoryAPI - called view
export const getSingleCategoryAPI =async(id)=>{
  return await commonAPI ("GET",`${SERVER_URL}/categories/${id}`,"")
}