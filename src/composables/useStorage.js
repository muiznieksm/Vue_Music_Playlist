import { projectStorage } from "@/firebase/config";
import { ref } from "vue";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filepath = ref(null);

  const uploadImage = async (file) => {
    filepath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filepath.value);

    try {
      const res = await storageRef.put(file);
      url.value = await res.ref.getDownloadURL();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { url, filepath, error, uploadImage };
};

export default useStorage;
