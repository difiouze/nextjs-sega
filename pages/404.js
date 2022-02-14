import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Image from "next/image";

const NotFound = () => {
    return (
      <div>
     <Image src="/img/notfound.gif" width="400" height="486" />
      </div>
    );
  };
  
  export default NotFound;
