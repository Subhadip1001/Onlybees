import React from "react";

const Artist = () => {
  return (
    <div className="bg-black text-white p-6 w-fit">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Artist</h2>

      {/* Artist Card */}
      <div className="flex flex-col gap-4">
        {/* Image */}
        <div className="w-40 h-42 rounded-2xl overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mohombi%2C_Melodifestivalen_2019%2C_Final%2C_Friends_Arena%2C_Solna-4_%28cropped%29.jpg/500px-Mohombi%2C_Melodifestivalen_2019%2C_Final%2C_Friends_Arena%2C_Solna-4_%28cropped%29.jpg"
            alt="Mohombi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Artist Info */}
        <div>
          <h3 className="text-xl font-semibold">Mohombi</h3>
          <p className="text-sm text-gray-400">
            Musician, Singer, Composer and Dancer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
