import { FunctionComponent } from "react";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.card1}>
          <img
            className={styles.noArtificialColors}
            alt=""
            src="/no-artificial-colors@2x.png"
          />
          <div className={styles.noArtificialColoursContainer}>
            <p className={styles.noArtificial}>{`No Artificial `}</p>
            <p className={styles.noArtificial}>Colours</p>
          </div>
        </div>
        <div className={styles.card11}>
          <div className={styles.noParaben}>
            <img className={styles.iconSwap} alt="" src="/iconswap@2x.png" />
          </div>
          <div className={styles.noArtificialColoursContainer}>No Paraben</div>
        </div>
        <div className={styles.card12}>
          <div className={styles.noParaben}>
            <img className={styles.iconSwap} alt="" src="/iconswap@2x.png" />
          </div>
          <div className={styles.noArtificialColoursContainer}>Vegan</div>
        </div>
        <div className={styles.card13}>
          <img
            className={styles.noArtificialColors}
            alt=""
            src="/no-artificial-colors@2x.png"
          />
          <div className={styles.noArtificialColoursContainer}>
            <p className={styles.noArtificial}>{`No Artificial `}</p>
            <p className={styles.noArtificial}>Colours</p>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.productsContainer}>
          <div className={styles.contentText}>
            <div className={styles.trendingProducts}>Trending Products</div>
            <div className={styles.topPicksFor}>
              Top Picks for Sustainable Dental Care
            </div>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <img
                className={styles.productImageIcon}
                alt=""
                src="/productimage@2x.png"
              />
              <div className={styles.container1}>
                <div className={styles.details}>
                  <div
                    className={styles.naturalTeethWhitening}
                  >{`Sensitivity Relief Vanilla & Peppermint Natural Mouthwash `}</div>
                  <div className={styles.price}>
                    <div className={styles.div}>$100</div>
                    <div className={styles.div1}>$150</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/shopping-cart.svg"
                  />
                  <div className={styles.addToCart}>Add to Cart</div>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.arrowForwardIcon}
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product1}>
              <img
                className={styles.productImageIcon}
                alt=""
                src="/productimage@2x.png"
              />
              <div className={styles.container1}>
                <div className={styles.details}>
                  <div className={styles.naturalTeethWhitening}>
                    <p
                      className={styles.noArtificial}
                    >{`Natural Teeth Whitening `}</p>
                    <p
                      className={styles.noArtificial}
                    >{`Toothpaste - Tea tree & Charcoal`}</p>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.div}>$100</div>
                    <div className={styles.div1}>$150</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/shopping-cart.svg"
                  />
                  <div className={styles.addToCart}>Add to Cart</div>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.arrowForwardIcon}
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product2}>
              <img
                className={styles.productImageIcon}
                alt=""
                src="/productimage@2x.png"
              />
              <div className={styles.container1}>
                <div className={styles.details}>
                  <div
                    className={styles.naturalTeethWhitening}
                  >{`organic bamboo toothbrush with soft natural bamboo bristles `}</div>
                  <div className={styles.price}>
                    <div className={styles.div}>$100</div>
                    <div className={styles.div1}>$150</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/shopping-cart.svg"
                  />
                  <div className={styles.addToCart}>Add to Cart</div>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.arrowForwardIcon}
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product3}>
              <img
                className={styles.productImageIcon}
                alt=""
                src="/productimage@2x.png"
              />
              <div className={styles.container1}>
                <div className={styles.details}>
                  <div
                    className={styles.naturalTeethWhitening}
                  >{`Sensitivity Relief Vanilla & Peppermint Natural Mouthwash `}</div>
                  <div className={styles.price}>
                    <div className={styles.div}>$100</div>
                    <div className={styles.div1}>$150</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/shopping-cart.svg"
                  />
                  <div className={styles.addToCart}>Add to Cart</div>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.arrowForwardIcon}
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productsChild} />
            <div className={styles.productsItem} />
          </div>
          <div className={styles.divslideshowControls}>
            <img
              className={styles.arrowBackIosIcon}
              alt=""
              src="/arrow-back-ios.svg"
            />
            <img
              className={styles.arrowBackIosIcon}
              alt=""
              src="/arrow-forward-ios.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.heroBanner}>
        <div className={styles.content}>
          <div className={styles.contentText1}>
            <div className={styles.echoFriendy}>Echo - Friendy Smile</div>
            <div className={styles.transformYourDental}>
              Transform Your Dental Routine with Eco-Friendly Toothbrushes
            </div>
          </div>
          <div className={styles.buttons4}>
            <div className={styles.button}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.arrowForwardIcon}
                  alt=""
                  src="/info-outline.svg"
                />
              </div>
              <div className={styles.addToCart}>SHOP NOW</div>
              <div className={styles.iconContainer5}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src="/arrow-forward1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <div className={styles.footer}>
        <div className={styles.frameParent}>
          <div className={styles.screenshot20240411At216Parent}>
            <img
              className={styles.screenshot20240411At216}
              alt=""
              src="/screenshot-20240411-at-216-1@2x.png"
            />
            <div className={styles.ecoDentalIsYourGoToDestiWrapper}>
              <div className={styles.ecoDentalIs}>
                Eco Dental is your go-to destination for premium natural oral
                care products. We are dedicated to providing you with a holistic
                approach to dental hygiene, harnessing the power of nature to
                promote a healthy smile.
              </div>
            </div>
            <div className={styles.social}>
              <div className={styles.facebookIconParent}>
                <div className={styles.facebookIcon}>
                  <div className={styles.rectangle} />
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <img
                  className={styles.facebookIcon}
                  alt=""
                  src="/linkedin-icon.svg"
                />
                <div className={styles.facebookIcon}>
                  <div className={styles.rectangle} />
                  <img
                    className={styles.instagramLogoIcon}
                    alt=""
                    src="/instagram-logo.svg"
                  />
                </div>
                <div className={styles.facebookIcon}>
                  <div className={styles.rectangle} />
                  <img
                    className={styles.twitterIcon2}
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
                <img
                  className={styles.facebookIcon}
                  alt=""
                  src="/twitter-icon.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.quickLinksParent}>
            <b className={styles.quickLinks}>Quick Links</b>
            <div className={styles.frameGroup}>
              <div className={styles.quickLinksWrapper}>
                <div className={styles.ourStory}>Quick Links</div>
              </div>
              <div className={styles.ourStoryWrapper}>
                <div className={styles.ourStory}>Our Story</div>
              </div>
              <div className={styles.ourStoryWrapper}>
                <div className={styles.ourStory}>Contact Us</div>
              </div>
              <div className={styles.ourStoryWrapper}>
                <div className={styles.ourStory}>{`Shipping & Delivery`}</div>
              </div>
            </div>
          </div>
          <div className={styles.receiveOffersDiscountsViaParent}>
            <b
              className={styles.receiveOffers}
            >{`Receive offers & discounts via e-mail`}</b>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.emailParent}>
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/email.svg"
                  />
                  <div className={styles.enterEmail}>Enter Email</div>
                </div>
              </div>
              <div className={styles.buttonVariants}>
                <div className={styles.button1}>
                  <img
                    className={styles.shoppingCartIcon4}
                    alt=""
                    src="/shopping-cart1.svg"
                  />
                  <div className={styles.addToCart}>Subscribe</div>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.arrowForwardIcon}
                      alt=""
                      src="/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.ecoDentalAllRightsReservParent}>
            <div className={styles.ecoDental}>
              © 2024, Eco Dental - All rights reserved.
            </div>
            <div className={styles.termsConditionsParent}>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.termsConditions}>Privacy Policy</div>
              <div className={styles.termsConditions}>Refund Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.container5}>
          <div className={styles.contentText2}>
            <div className={styles.contentText3}>
              <div className={styles.trendingProducts}>Testimonials</div>
              <div className={styles.topPicksFor}>
                Hear what our customers say
              </div>
            </div>
          </div>
          <div className={styles.testimonials2}>
            <div className={styles.container6}>
              <div className={styles.testimonial}>
                <div className={styles.quiteDifferentYouContainer}>
                  <span className={styles.quiteDifferentYouContainer1}>
                    <p
                      className={styles.noArtificial}
                    >{`Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using `}</p>
                    <p
                      className={styles.noArtificial}
                    >{`Tea tree & Charcoal tooth paste.`}</p>
                  </span>
                </div>
                <div className={styles.customer}>
                  <div className={styles.details4}>
                    <img
                      className={styles.customerImageIcon}
                      alt=""
                      src="/customer-image@2x.png"
                    />
                    <div className={styles.details5}>
                      <div className={styles.nigelNigel}>Courtney Henry</div>
                      <div className={styles.costomer}>Costomer</div>
                    </div>
                  </div>
                  <div className={styles.icon}>
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.quiteDifferentYouContainer}>
                  <span className={styles.quiteDifferentYouContainer1}>
                    <p
                      className={styles.noArtificial}
                    >{`Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using `}</p>
                    <p
                      className={styles.noArtificial}
                    >{`Tea tree & Charcoal tooth paste.`}</p>
                  </span>
                </div>
                <div className={styles.customer}>
                  <div className={styles.details4}>
                    <img
                      className={styles.customerImageIcon}
                      alt=""
                      src="/customer-image@2x.png"
                    />
                    <div className={styles.details5}>
                      <div className={styles.nigelNigel}>Ronald Richards</div>
                      <div className={styles.costomer}>Costomer</div>
                    </div>
                  </div>
                  <div className={styles.icon}>
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.quiteDifferentYouContainer}>
                  <span className={styles.quiteDifferentYouContainer1}>
                    <p
                      className={styles.noArtificial}
                    >{`Quite different!! You can feel the difference between chemical-based and natural toothpaste. I felt better after using `}</p>
                    <p
                      className={styles.noArtificial}
                    >{`Tea tree & Charcoal tooth paste.`}</p>
                  </span>
                </div>
                <div className={styles.customer}>
                  <div className={styles.details4}>
                    <img
                      className={styles.customerImageIcon}
                      alt=""
                      src="/customer-image@2x.png"
                    />
                    <div className={styles.details5}>
                      <div className={styles.nigelNigel}>Jenny Wilson</div>
                      <div className={styles.costomer}>Costomer</div>
                    </div>
                  </div>
                  <div className={styles.icon}>
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                    <img
                      className={styles.iconChild}
                      alt=""
                      src="/rectangle-7.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carousel}>
              <div className={styles.carouselChild} />
              <div className={styles.carouselItem} />
              <div className={styles.carouselItem} />
              <div className={styles.carouselItem} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <img
          className={styles.screenshot20240411At2161}
          alt=""
          src="/screenshot-20240411-at-216-1@2x.png"
        />
        <div className={styles.tabsParent}>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <div className={styles.tab1}>
                <div className={styles.nigelNigel}>Home</div>
                <div className={styles.accountCircleParent}>
                  <img
                    className={styles.accountCircleIcon}
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tab2}>
              <div className={styles.tab1}>
                <div className={styles.nigelNigel}>Teeth whitening</div>
                <div className={styles.accountCircleGroup}>
                  <img
                    className={styles.accountCircleIcon}
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tab2}>
              <div className={styles.tab1}>
                <div className={styles.nigelNigel}>Toothpaste</div>
                <div className={styles.accountCircleGroup}>
                  <img
                    className={styles.accountCircleIcon}
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tab2}>
              <div className={styles.tab1}>
                <div className={styles.nigelNigel}>Mouthwash</div>
                <div className={styles.accountCircleGroup}>
                  <img
                    className={styles.accountCircleIcon}
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className={styles.shoppingCartIcon}
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.tabs}>
              <img
                className={styles.accountCircleIcon}
                alt=""
                src="/account-circle.svg"
              />
              <img
                className={styles.arrowBackIosIcon}
                alt=""
                src="/account-circle1.svg"
              />
            </div>
            <div className={styles.tabs}>
              <img
                className={styles.accountCircleIcon}
                alt=""
                src="/person-outline.svg"
              />
              <img
                className={styles.arrowBackIosIcon}
                alt=""
                src="/shopping-cart2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <b className={styles.quickLinks}>2</b>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.promotionalBanner}>
          <img className={styles.banner111} alt="" src="/banner1-1-1@2x.png" />
          <img className={styles.banner111} alt="" src="/banner2-1-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
