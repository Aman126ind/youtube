import React from 'react'
import vid from "../../component/Video/vid.mp4"
import WHL from '../../component/WHL/WHL'
import { useSelector } from 'react-redux'
const Watchhistory = () => {
  const watchhistoryvideolist=useSelector(s=>s.historyreducer)
    // const watchhistoryvideolist=[
    //   {
    //     _id1:1,
    //     video_src:vid,
    //     chanel:"wvjwenfj3njfwef",
    //     title:"video 1",
    //     uploader:"abc",
    //     description:"description of video 1"
    //   },
    //   {
    //     _id1:1,
    //     video_src:vid,
    //     chanel:"wvjwenfj3njfwef",
    //     title:"video 1",
    //     uploader:"abc",
    //     description:"description of video 1"
    //   },
    //   {
    //  _id1:2,
    //   video_src:vid,
    // chanel:"wvjwenfj3njfwef",
    //   title:"video 2",
    //   uploader:"abc",
    //  description:"description of video 2"

    //   },
    //   {
    //     _id1:3,
    //     video_src:vid,
    //     chanel:"wvjwenfj3njfwef",
    //     title:"video 3",
    //     uploader:"abc",
    //     description:"description of video 3"
    //   },
    //   {
    //     _id1:4,
    //     video_sr4,c:vid,
    //     chanel:"wvjwenfj3njfwef",
    //     title:"video 4",
    //     uploader:"abc",
    //     description:"description of video 4"
    //     },
    // ]

  return (
    <WHL page={"History"} videolist={watchhistoryvideolist}/>
  )
}

export default Watchhistory
