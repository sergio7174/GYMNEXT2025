// RTK Query allows dynamically injecting endpoint definitions into an existing API service object. This enables splitting up endpoints into multiple files for maintainability, as well as lazy-loading endpoint definitions and associated code to trim down initial bundle sizes. This can be very beneficial for larger applications that may have many endpoints.
// RTK Query API - Redux toolkit
import { apiSlice } from "@/redux/api/apiSlice";

//const BACKEND_BASE_URLBE = "http://localhost:7000/" 
const BACKEND_BASE_URLBE = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// api.injectEndpoints accepts a collection of endpoint definitions (same as createApi), as well as an optional overrideExisting parameter.

export const classApi = apiSlice.injectEndpoints(
    
  {
  // If you inject an endpoint that already exists and don't explicitly specify overrideExisting: true, the endpoint will not be overridden. In development mode, you will get a warning about this if overrideExisting is set to false, and an error will be throw if set to 'throw'
  overrideExisting: true,
  endpoints: (builder) => ({
   
    // endpoints: a set of operations that we've defined for interacting with this server. Endpoints can be queries, which return data for caching, or mutations, which send an update to the server. The endpoints are defined using a callback function that accepts a builder parameter and returns an object containing endpoint definitions created with builder.query() and builder.mutation().
    
    registerClass: builder.mutation({
      query: (data) => ({
        
        //url: "https://shofy-backend.vercel.app/api/user/signup",
        //url: "http://localhost:7000/api/user/signup",
        url: `${BACKEND_BASE_URLBE}`+'api/class/', //Development mode
        method: "POST",
        body: data,
      }),
    }),
    // erase Image
    deleteClassImage: builder.mutation({
      query: (image) => ({
        
        //url: "https://shofy-backend.vercel.app/api/user/signup",
        //url: "http://localhost:7000/api/user/signup",
        url: `${BACKEND_BASE_URLBE}`+'api/class/delete-image', //Development mode
        method: "POST",
        body: {image},
      }),
    }),
    // get single product
    getClass: builder.query({
     // query: (id) => `https://shofy-backend.vercel.app/api/product/single-product/${id}`,
      query: (id) => `${BACKEND_BASE_URLBE}`+'api/class/get-single-class/'+`${id}`,
    
    }),
    // get all Classes

   getAllClasses:builder.query({   
    query: () => `${BACKEND_BASE_URLBE}`+'api/class/listAll',
   }),
    // End of get all Classes
    
    // update Product endPoint
    updateClass: builder.mutation({
      query: ({ selected, data }) => ({
               
        // url: "https://shofy-backend.vercel.app/api/category/add",
        url: `${BACKEND_BASE_URLBE}`+'api/class/update-class/'+`${selected._id}`,
        method: "PUT",
        body: data,
      }),
    }),
 // delete Product endpoint
     deleteClass: builder.mutation({
      query: ( id ) => ({
               
        // url: "https://shofy-backend.vercel.app/api/category/add",
        url: `${BACKEND_BASE_URLBE}`+'api/class/delete-class/'+`${id}`,
        method: "DELETE",
      }),
    }),// End of delete class
  
  }),



}); // end of classesApi

export const {
  useDeleteClassImageMutation,
  useRegisterClassMutation,
  useGetAllClassesQuery,
  useGetClassQuery,
  useUpdateClassMutation,
  useDeleteClassMutation,
} = classApi;