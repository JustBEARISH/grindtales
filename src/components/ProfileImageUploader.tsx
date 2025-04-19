'use client';

import { useState } from 'react';

export default function ProfileImageUploader({ currentImage, onSave }: { currentImage: string; onSave: (img: string) => void }) {
  const [preview, setPreview] = useState(currentImage);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSave = () => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSave(reader.result as string); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-zinc-900 rounded-xl text-white shadow-xl space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Update Profile Picture</h2>
      <img src={preview} alt="Preview" className="w-32 h-32 rounded-full mx-auto" />
      <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm" />
      <button onClick={handleSave} className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
        Save
      </button>
    </div>
  );
} 