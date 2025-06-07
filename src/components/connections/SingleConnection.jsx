
const SingleConnection = ({user}) => {

    const {
        firstName,
        lastName,
        profilePicture,
        gender,
        experienceLevel,
        education,
        profileSummary,
    }=user;

  return (
    <div className='flex items-center space-x-4 select-none my-5'>
        <img
        src={profilePicture}
        alt={firstName}
        className='w-12 h-12 rounded-full'
        />
        <div className='flex flex-col'>
            <h3 className='text-md font-semibold'>{lastName ? firstName + " "+ lastName : firstName}</h3>
            <p className='text-sm text-gray-400'>
                {profileSummary?.charAt(0).toUpperCase() + profileSummary?.slice(1) + "("+
                experienceLevel?.charAt(0).toUpperCase() + experienceLevel?.slice(1) + ")"
                }

            </p>
            {education && (
                <p className='text-sm text-gray-400'>
                    {education}
                </p>
            )}
        </div>
    </div>
  )
}

export default SingleConnection;