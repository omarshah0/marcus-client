import React from "react"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

//Used for Event Tracking on Google Analytics
// const onClickShare = (network, orientation) => {
//   window.dataLayer.push({
//     event: "socialShare",
//     network: network,
//     orientation: orientation,
//   })
// }

// const onClickShareVert = net => () => onClickShare(net, "vertical")

const SocialSharing = ({ location }) => {
  const href = `https://www.binarypakistan.com${location.pathname}`
  return (
    <div>
      <FacebookShareButton url={href}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>{" "}
      <TwitterShareButton url={href} via={"binarypakistan"}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={href}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>{" "}
      <EmailShareButton
        url={href}
        subject={"Check out this article on WikiJob"}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  )
}

export default SocialSharing
