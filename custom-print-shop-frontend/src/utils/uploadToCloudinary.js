export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_preset"); // from Cloudinary settings
  
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw err;
    }
  };
  