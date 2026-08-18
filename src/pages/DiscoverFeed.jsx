import { useDispatch, useSelector } from "react-redux";

import { addUserFeed } from "@/redux/features/userFeedSlice";
import { userFeed } from "../../global/globalAPI";
import DiscoverFeedUI from "@/components/DiscoverFeedUI/DiscoverFeedUI";
import DiscoverFeedPanel from "@/components/DiscoverFeedUI/DiscoverFeedPanel";
import { useEffect, useState } from "react";
import ConnectionSkeleton from "@/components/Skeletons/ConnectionSkeleton";

const DiscoverFeed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const [loading, setLoading] = useState(true);

  const fetchFeed = async () => {
    try {
      const feed = await userFeed();
      dispatch(addUserFeed(feed.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return loading ? (
    <div className="mx-auto my-13 w-full max-w-7xl ">
      <ConnectionSkeleton />
    </div>
  ) : (
    <section className="relative overflow-hidden bg-slate-100">
      <div className="mx-auto max-w-7xl px-8 py-14">
        {/* Hero Quote */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-8 whitespace-nowrap text-6xl font-black tracking-tight text-slate-900 lg:text-7xl">
            Your next teammate is{" "}
            <span className="bg-linear-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              one connection away.
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid min-h-[80vh] grid-cols-2 items-center gap-24">
          <DiscoverFeedPanel />

          <div className="flex justify-center">
            <DiscoverFeedUI feedData={feedData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverFeed;
