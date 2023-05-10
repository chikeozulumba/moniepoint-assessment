import Image from "next/image";

export function Avatar() {
  return (
    <div id="avatar">
      <div className="wrapper">
        <div className="image">
          <Image src="/avatar.png" alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
