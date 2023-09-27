import { useEffect, useState } from "react";
import ProfileService from "../../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useUserProfile from "../../_stores/useUserProfile";

export default function useFetchProfile() {
  const { user } = useFetchUser();
  const { profile } = useUserProfile();
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (profile?.username) {
      setData(profile);
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await ProfileService.getProfile(user.id);
        if (data) {
          // Type this
          setData(data[0]);
        }

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return { data, isLoading };
}