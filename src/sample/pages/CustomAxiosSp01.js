import React, { useCallback, useEffect } from "react";
import customAxios from "../../api/customAxios ";

function CustomAxiosSp01({ url }) {
  const fetchUsers = useCallback(async () => {
    const response = await customAxios.get(url);
    console.log(response.data);
  }, [url]);

  useEffect(() => {
    console.log("userEffet");
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <div>CustomAxiosSp01</div>
      <button onClick={fetchUsers}>호출 테스트</button>
    </>
  );
}

CustomAxiosSp01.defaultProps = {
  url: "/users",
};

export default CustomAxiosSp01;
