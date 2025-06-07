import  { useEffect, useState } from "react";
import useFeed from "../hooks/useFeed";
import { useSelector } from "react-redux";
import FeedCard from "../components/feed/FeedCard";
const Feed = () => {
  const [error, setError] = useState(null);
  const getFeed = useFeed();

  useEffect(() => {
    getFeed(setError);
  }, []);

  const feed = useSelector((store) => store.feed);

  if (!feed || feed.length === 0) {
    return <div className="text-center mt-20">No more profiles</div>;
  }

  const currentProfile = feed[0];
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <FeedCard profile={currentProfile}/>

      {error && <div className="text-center mt-20">{error}</div>}
      
    </div>
  );
};

export default Feed