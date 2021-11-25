import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faEnvelope,faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(faWhatsapp,faMapMarkerAlt,faEnvelope,faBars,faTimes);

export const Whatsapp=()=>{
    return(
        <FontAwesomeIcon icon={["fab", "whatsapp"]} />
    )
}

export const LocationArrow=()=>{
    return(
        <FontAwesomeIcon icon="map-marker-alt" />
    )
}

export const Mail=()=>{
    return(
        <FontAwesomeIcon icon="envelope" />
    )
}
export const Menu=({onclick})=>{
    return(
        <FontAwesomeIcon icon="bars" onClick={()=>onclick} />
    )
}
export const Exit=()=>{
    return(
        <FontAwesomeIcon icon="times" />
    )
}


