import { Services } from "components/molecules";
import { assets } from "constant/images"
import { CategoryTabs, Footer, PromotionCard, Slider, ProductTabs, Product, DailySellsTabs, Header } from "components/organisms";
import { promotion, services, topList } from "@data"

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <div className="2xl:max-w-8xl xl:max-w-6xl lg:max-w-6xl mx-auto md:py-20 py-10 md:px-22 sm:px-8 px-4 xl:px-5 2xl:px-0 w-full">
        <CategoryTabs title="Explore Categories"
          labelClass="text-black-200 lg:text-2.5xl text-2xl font-semibold tracking-wide"
        />
      </div>
      <div className="2xl:max-w-8xl xl:max-w-6xl lg:max-w-6xl mx-auto py-5 md:px-22 sm:px-8 px-4 xl:px-5 2xl:px-0 w-full">
        <ProductTabs title="Featured Products"
          labelClass="text-black-200 lg:text-2.5xl text-2xl font-semibold tracking-wide"
        />
      </div>
      <div className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto py-20 md:px-6 px-4 xl:px-0 grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
        {promotion.map((v, k) => {
          return <PromotionCard {...v} key={k} />
        })}
      </div>
      <div className="2xl:max-w-8xl xl:max-w-6xl mx-auto py-5 md:px-6 sm:px-6 px-4 xl:px-0 w-full">
        <DailySellsTabs title="Daily Best Sells" />
      </div>
      <div className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:py-20 pb-20 md:px-6 px-4 xl:px-0 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-4 w-full">
        {topList.map((v, k) => {
          return (
            <div key={k}>
              <h1 className="text-black-200 lg:text-2xl text-xl font-semibold tracking-wide border-b border-black-100 pb-4 relative">{v.title}
                <span className="bg-primary-100 h-0.5 w-26 absolute -bottom-[1.15px] left-0 rounded-xl" />
              </h1>
              <div className="space-y-4 py-6">
                {v?.list?.map((val, i) => {
                  return <Product className="mx-0 flex-row border-0 space-x-1" {...val} key={i}
                    imgMainClass="bg-gray-400 p-3"
                    imgClass="w-20"
                    btnClass="hidden" nameClass="hidden" ratingClass="pt-0" />
                })}</div>
            </div>
          )
        })}
      </div>
      <PromotionCard src={assets.mobile}
        className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto pb-8 pt-6 md:px-6 px-5 xl:px-0 items-center md:gap-16"
        leftSideClass="2xl:px-0 lg:px-0 px-0 pt-0"
        titleClass="2xl:text-6xl lg:text-4.5xl md:text-4xl lg:leading-[1.2em] text-3xl font-bold whitespace-normal"
        descClass="2xl:text-xl xl:text-base md:text-md md:py-7 pt-5 pb-7 max-w-lg"
        title="Shop Faster With Groceyish App"
        desc="Available on oriescat IOS & Android"
        btnClass="hidden"
        imgClass="w-full hidden md:block"
      >
        <div className="flex items-center md:pt-4">
          <img src={assets.button.appStore} alt="AppStore" className="2xl:h-16 lg:h-12 md:h-10 h-8 cursor-pointer" />
          <img src={assets.button.playStore} alt="PlayStore" className="2xl:h-18 lg:h-14 md:h-11 h-9 cursor-pointer" />
        </div>
      </PromotionCard>
      <div className="lg:mt-12 2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto 2xl:py-12 py-10 md:px-6 px-4 xl:px-8 md:flex justify-between md:space-x-6 space-y-8 md:space-y-0 w-full">
        {services.map((v, k) => {
          return <Services {...v} key={k} />
        })}
      </div>
      <div className="2xl:max-w-8xl xl:max-w-6xl max-w-6xl mx-auto md:px-6 px-4 xl:px-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
