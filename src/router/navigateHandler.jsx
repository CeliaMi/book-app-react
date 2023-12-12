import { useNavigate } from "react-router-dom"

export const handleGoBack = () => {
    const navigate = useNavigate()
    navigate(-1);
  }