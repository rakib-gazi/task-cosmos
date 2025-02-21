import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://ph-assignment-11-server-pink.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  const { LogOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
            LogOutUser()
            .then(()=>{
                navigate("/login");
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxios;
