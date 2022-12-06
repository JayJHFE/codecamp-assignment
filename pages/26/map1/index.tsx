import { useEffect } from "react";

declare const window: typeof globalThis & { kakao: any };

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); 
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0984e61d435c970f9a528f91bcca408f";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); 
        
        const options = { 
          center: new window.kakao.maps.LatLng(37.338154, 127.120249), 
          level: 4, 
        };
        
        const map = new window.kakao.maps.Map(container, options); 
        
        const imageSrc = '/BonoHead2.png'   
        const imageSize = new window.kakao.maps.Size(64, 69) 
        const imageOption = {offset: new window.kakao.maps.Point(27, 69)};
        
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage 
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
            // 클릭한 위도, 경도 정보를 가져옵니다 
            const latlng = mouseEvent.latLng; 
            
            
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            
            let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
            
            // const resultDiv = document.getElementById('clickLatlng'); 
            // resultDiv.innerHTML = message;
            
        });
      });
    };

  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
