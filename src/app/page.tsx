"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, MessageSquare, Award, Send } from "lucide-react";

export default function RentHub() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Properties", id: "product" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RentHub"
          button={{
            text: "List Your Property",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="YOOOOOOOOO"
          description="Discover thousands of verified rental properties from trusted hosts. Book your dream vacation home today with confidence and ease."
          tag="Premium Rentals"
          buttons={[
            {
              text: "Browse Properties",
              href: "product"
            },
            {
              text: "List Your Home",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Beautiful rental home with modern amenities"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="HOLYYYYY SHITTT"
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            },
            {
              text: "Join Our Community",
              href: "testimonial"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Rental Properties"
          description="Discover our hand-picked selection of premium rental homes, each offering unique experiences and exceptional value for your stay."
          tag="Top Rated"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Luxury Stays",
              name: "Oceanfront Villa Paradise",
              price: "$450/night",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/3655907/pexels-photo-3655907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury oceanfront villa with pool"
            },
            {
              id: "2",
              brand: "Mountain Retreats",
              name: "Cozy Alpine Cabin",
              price: "$180/night",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/7746547/pexels-photo-7746547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cozy cabin in mountain setting"
            },
            {
              id: "3",
              brand: "Beach Homes",
              name: "Sunset Beach House",
              price: "$320/night",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beach house with ocean view"
            },
            {
              id: "4",
              brand: "City Living",
              name: "Modern Downtown Loft",
              price: "$200/night",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern urban loft apartment"
            },
            {
              id: "5",
              brand: "Family Stays",
              name: "Spacious Family Manor",
              price: "$280/night",
              rating: 4,
              reviewCount: "92",
              imageSrc: "https://images.pexels.com/photos/8141959/pexels-photo-8141959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Large family vacation home"
            },
            {
              id: "6",
              brand: "Romantic Getaways",
              name: "Charming Country Cottage",
              price: "$150/night",
              rating: 5,
              reviewCount: "74",
              imageSrc: "https://images.pexels.com/photos/8890049/pexels-photo-8890049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Romantic cottage in countryside"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from travelers who found their perfect home away from home"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Adventure Stories",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3063478/pexels-photo-3063478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily & David Rodriguez",
              role: "Frequent Travelers",
              company: "Retired Couple",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily and David Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Business Executive",
              company: "Global Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Family Organizer",
              company: "Mom of 3",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34433235/pexels-photo-34433235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Thompson"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Platforms"
          description="Our rental homes are featured across all major booking platforms, ensuring maximum visibility and trust for property owners"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Send}
          title="Ready to List Your Property?"
          description="Join thousands of successful property owners who trust us to manage their rental homes. Start earning passive income today."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. Start your journey to rental income success."
          imageSrc="https://images.pexels.com/photos/8918080/pexels-photo-8918080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Happy family enjoying their rental home experience"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Platform",
              items: [
                {
                  label: "Browse Properties",
                  href: "product"
                },
                {
                  label: "List Your Home",
                  href: "contact"
                },
                {
                  label: "Host Resources",
                  href: "about"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "contact"
                },
                {
                  label: "Guest Support",
                  href: "contact"
                },
                {
                  label: "Host Support",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "contact"
                },
                {
                  label: "Press",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | RentHub - Your Trusted Rental Home Platform"
        />
      </div>
    </ThemeProvider>
  );
}