import * as React from "react";
import Container from "./Container";
import { Carousel } from "@mantine/carousel";
import CarouselContent from "../content/carousel.json";
import { Button, Text } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
    className?: string,
}

interface ISlide {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
};


const CarouselBlock: React.FC<CarouselProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const autoplay = useRef(Autoplay({ delay: 15000 }));

  const image = (slideId: number) => {
    if(slideId == 1) {
      return (
        <StaticImage
          src="../images/hero-slide-figure-1.png"
          width={380}
          height={572}
          alt="Slide 1"
          className="h-auto w-auto object-cover -mt-[20px] md:-mt-[70px] 2xl:-mt-[120px]"
        />
      );
    } else if(slideId == 2) {
      return (
        <StaticImage
          src="../images/hero-slide-figure-2.png"
          width={400}
          height={534}
          alt="Slide 2"
          className="h-auto w-auto object-cover -mt-[20px] md:-mt-[70px] 2xl:-mt-[120px]"
        />
      );
    }
    else {
      return (
        <StaticImage
          src="../images/hero-slide-figure-3.png"
          width={480}
          height={534}
          alt="Slide 3"
          className="h-auto w-auto object-cover -mt-[20px] md:-mt-[70px] 2xl:-mt-[110px]"
        />
      );
    }
  };

  return (
    <div className={`min-h-[580px] ${classNameValue}`}>
      <Carousel
        align="start"
        speed={1}
        loop
        withControls={false}
        withIndicators
        plugins={[autoplay.current]}
        height={550}
        classNames={{
          indicator:
            "w-[10px] h-[10px] data-[active=true]:bg-royal-blue transition duration-300 border-solid border-[2px] border-royal-blue",
          indicators: "gap-6",
        }}
      >
        {CarouselContent.content.map((slide: ISlide) => (
          <Carousel.Slide key={slide.id}>
            <Container className=" flex flex-nowrap pt-[41px] md:pt-[60px] 2xl:pt-[108px] text-black-pearl/90">
              <div className="basis-1/2">
                <Text className="font-plexSerif font-medium max-w-[223px] text-[25px] leading-[26px] md:max-w-[344px] md:text-[36px] md:leading-[45.5px] 2xl:text-[40px] 2xl:max-w-[586px]">
                  Цифровой документооборот в три этапа:
                </Text>
                <div className="mt-[30px] md:mt-[36px] 2xl:mt-[14px] flex gap-3 items-center">
                  {CarouselContent.content.map((innerSlide: ISlide) => (
                    <React.Fragment key={`id_${innerSlide.id}`}>
                      <Text
                        className={
                          slide.id == innerSlide.id
                            ? "font-medium text-[18px] leading-[23.4px] md:text-[24px] md:leading-[31.2px]"
                            : "font-medium text-[14px] leading-[18.2px] md:text-[18px] md:leading-[23.4px]"
                        }
                      >
                        {innerSlide.id}
                      </Text>
                      {innerSlide.id != CarouselContent.content.length ? (
                        <div className="w-4 h-[1.5px] border-b-[1.5px] border-b-royal-blue"></div>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
                <Text className="mt-[12px] md:mt-[6px] 2xl:mt-[14px] font-medium text-[18px] leading-[20px] md:text-[24px] md:leading-[31.2px]">
                  {slide.title}
                </Text>
                <Text className="max-w-[205px] md:max-w-[324px] 2xl:max-w-[454px] mt-2 md:mt-[21px] 2xl:mt-[14px] text-[14px] leading-[18.2px] md:text-[16px] md:leading-[20.8px] md:tracking-[0.04em]">
                  {slide.description}
                </Text>
                <div className="mt-[37px] md:mt-[35px] 2xl:mt-[31px] text-center md:text-left">
                  <Button className="px-8 min-h-[47px] md:min-h-[56px] rounded-[45px] font-bold text-[12px] leading-[15.6px] md:text-[16px] md:leading-[20.8px] uppercase text-white hover:text-black-pearl/90 bg-royal-blue hover:bg-transparent hover:border hover:border-royal-blue">
                    Попробовать Бесплатно
                  </Button>
                </div>
              </div>
              <div className="basis-1/2 text-right">{image(slide.id)}</div>
            </Container>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBlock;

