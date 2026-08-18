import { allConnections as connections } from "../../global/globalAPI";
import ConnectionSkeleton from "../components/Skeletons/ConnectionSkeleton";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "@/redux/features/userConnectionSlice";
import ConnectionUI from "@/components/ConnectionsUI/ConnectionUI";

const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);

  const [loading, setLoading] = useState(true);

  const fetchConnection = async () => {
    try {
      setLoading(true);

      const userConnection = await connections();
      console.log(userConnection);

      dispatch(addConnections(userConnection.data));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  return loading ? (
    <div className="mx-auto my-13 w-full max-w-7xl ">
      <ConnectionSkeleton />
    </div>
  ) : (
    <div className="mx-auto my-13 w-full max-w-7xl">
      <ConnectionUI connection={connection} />
    </div>
  );
};

export default Connections;
