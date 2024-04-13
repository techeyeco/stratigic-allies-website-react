import React from "react";

export default function Product() {
  const [active, setActive] = React.useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });

  const data = [
    {
      id: "item1",
      img: "https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0",
      name: "Jim smith",
      title: "Developer",
      active: active.item1,
    },
    {
      id: "item2",
      img: "https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0",
      name: "Jim smith",
      title: "Developer",
      active: active.item2,
    },
    {
      id: "item3",
      img: "https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0",
      name: "Jim smith",
      title: "Developer",
      active: active.item3,
    },
    // {
    //   id: "item4",
    //   img: "https://th.bing.com/th/id/OIP.qeffvHdSUkQYLj5YDjZRfwHaJl?rs=1&pid=ImgDetMain",
    //   name: "Jim smith",
    //   title: "Developer",
    //   active: active.item4,
    // },
    // {
    //   id: "item5",
    //   img: "https://th.bing.com/th/id/OIP.qeffvHdSUkQYLj5YDjZRfwHaJl?rs=1&pid=ImgDetMain",
    //   name: "Jim smith",
    //   title: "Developer",
    //   active: active.item5,
    // },
    // {
    //   id: "item6",
    //   img: "https://th.bing.com/th/id/OIP.qeffvHdSUkQYLj5YDjZRfwHaJl?rs=1&pid=ImgDetMain",
    //   name: "Jim smith",
    //   title: "Developer",
    //   active: active.item6,
    // },
  ];

  const mouseEnterHandler = (item) => {
    setActive({
      ...active,
      [item.id]: !Boolean[item.active],
    });
  };

  const mouseLeaveHandler = () => {
    setActive(false);
  };

  return (
    <section className="text-center py-20 px-10 max-w-[1200px] mx-auto">
      {" "}
      <p className="text-3xl lg:text-5xl font-bold mb-5 pb-5 border-b-4 border-primary w-max mx-auto">
        Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {data.map((item, index) => {
          return (
            <div
              onMouseEnter={() => mouseEnterHandler(item)}
              onMouseLeave={() => mouseLeaveHandler(item)}
              key={index}
              className="w-full h-80 relative overflow-hidden
              duration-200 ease-in-out after:duration-200 after:ease-in-out
              after:bg-gradient-to-t after:from-black/90 after:hover:via-black/50
              after:scale-[1] after:p-20 after:absolute after:bottom-[-75px] after:right-0
              after:left-0 after:origin-center after:z-0 after:hover:bottom-0"
            >
              <img
                src={item.img}
                alt=""
                className="h-full w-full object-cover saturate-0 rounded-lg top-0 left-0"
              />
              <div
                className="absolute bottom-0 left-0 right-0 top-0 text-start z-10 hover:-translate-y-3 
                              flex flex-col justify-end p-6 px-20 duration-300 ease-in-out"
              >
                <div className="">
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text">{item.title}</p>
                  <p
                    className={`text-xs  
                    ${item.active ? "block" : "hidden"}
                    `}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
