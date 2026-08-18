import { useEffect, useState } from "react";
import { requestFeed } from "../../global/globalAPI";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addRequestUser } from "@/redux/features/userRequestSlice";
import RequestSkeleton from "@/components/Skeletons/RequestSkeletion";
import RequestFeedUI from "@/components/RequestFeedUI/RequestFeedUI";

const RequestFeed = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store) => store.request);

  const [loading, setLoading] = useState(true);

  const fetchRequestFeed = async () => {
    try {
      const requests = await requestFeed();
      dispatch(addRequestUser(requests.data.data.allPendingConnectionRequest));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequestFeed();
  }, []);

  return loading ? (
    <div className="mx-auto my-13 w-full max-w-7xl ">
      <RequestSkeleton />
    </div>
  ) : (
    <div className="mx-auto my-13 w-full max-w-7xl">
      <RequestFeedUI requestData={requestData} />
    </div>
  );
};

export default RequestFeed;
