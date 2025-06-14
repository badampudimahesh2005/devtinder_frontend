import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import EditProfile from "../components/profile/EditProfile";
import ProfilePictureUpload from "../components/profile/ProfilePictureUpload";
import BackRoute from "../components/BackRoute";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const [showFullBio, setShowFullBio] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (user === null) return null;
  const {
    firstName,
    lastName,
    age,
    location,
    gender,
    experienceLevel,
    bio,
    skills,
    socialLinks,
    profilePicture,
    profileSummary,
    education,
    workExperience,
  } = user;

  return (
    user && (
      <div className="max-w-2xl my-24 mx-auto p-6 bg-base-300 shadow-xl rounded-lg border-[0.1px] border-gray-800">

        <BackRoute />

        {/* Edit Profile Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Edit Profile
          </button>
        </div>

        {/* Profile Picture */}
        {/* <div className="flex flex-col items-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
          />
          <h1 className="mt-4 text-2xl font-bold">{firstName + " " + lastName}</h1>
          <p className="text-gray-400">
            <strong>Experience:</strong>
            {experienceLevel ? experienceLevel?.charAt(0).toUpperCase() + experienceLevel?.slice(1) : "Beginner"}
          </p>
        </div> */}

        <ProfilePictureUpload user={user} />

           {/* Profile Summary */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold">
            {firstName + " " + lastName}
          </h1>
          <p className="text-gray-400">
            {profileSummary.charAt(0).toUpperCase() + profileSummary.slice(1) + " ( " + experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1) + " )"}
          </p>
        </div>


        {/* Basic Info */}
        <div className="mt-6">
          <p>
            <strong>Age:</strong> {age ? age + " years" : "Not specified"}
          </p>
          <p>
            <strong>Location:</strong> {location ? location : "Not specified"}
          </p>
          <p>
            <strong>Gender:</strong> {gender ? gender?.charAt(0).toUpperCase() + gender?.slice(1) : <span className="text-gray-400">Not set</span>}
          </p>
        </div>

        {/* Bio Section */}
        {bio && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Bio</h3>
            <div>
              {showFullBio ? (
                <p className="text-gray-400">
                  {bio}
                  <button
                    onClick={() => setShowFullBio(false)}
                    className="text-blue-500 hover:underline ml-2 cursor-pointer"
                  >
                    Show less
                  </button>
                </p>
              ) : (
                <p className="text-gray-400">
                  {bio.length > 200 ? bio.substring(0, 200) + "..." : bio}
                  {bio.length > 200 && (
                    <button
                      onClick={() => setShowFullBio(true)}
                      className="text-blue-500 hover:underline ml-2 cursor-pointer"
                    >
                      Read more
                    </button>
                  )}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold py-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-600 font-semibold text-gray-200 rounded-lg text-sm select-none"
                >
                  {skill.charAt(0).toUpperCase() + skill.slice(1)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {education && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-gray-400">{education}</p>
          </div>
        )}

        {/* Work Experience Section */}
        {workExperience && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Work Experience</h3>
            <p className="text-gray-400">{workExperience}</p>
          </div>
        )}

        {/* Social Links */}
        {socialLinks && Object.keys(socialLinks).length > 0 && (
          // checing the socialLinks object to see if it has any keys
          <div className="mt-6">
            <h3 className="text-lg font-semibold py-3">Social Links</h3>
            <div className="flex gap-4">
              {Object.values(socialLinks).every(link => !link || link === "" || link === " ") && (
                <p className="text-gray-400">No social links provided</p>
              )}
              {socialLinks.github && (
                <a target="_blank"
                  href={socialLinks.github}
                  className="text-gray-400 hover:text-gray-100 transition-all text-xl hover:underline"
                >
                  <FaGithub />
                </a>
              )}
              {socialLinks.linkedin && (
                <a target="_blank"
                  href={socialLinks.linkedin}
                  className="text-gray-400 hover:text-gray-100 transition-all text-xl hover:underline"
                >
                  <FaLinkedinIn />
                </a>
              )}
              {socialLinks.twitter && (
                <a target="_blank"
                  href={socialLinks.twitter}
                  className="text-gray-400 hover:text-gray-100 transition-all text-xl hover:underline"
                >
                  <FaXTwitter />
                </a>
              )}
              {socialLinks.instagram && (
                <a target="_blank"
                  href={socialLinks.instagram}
                  className="text-gray-400 hover:text-gray-100 transition-all text-xl hover:underline"
                >
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Edit Profile Modal */}
        <EditProfile
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={user}
        />
      </div>
    )
  );
};

export default Profile;