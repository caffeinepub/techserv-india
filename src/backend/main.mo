import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  module Testimonial {
    public func compare(a : Testimonial, b : Testimonial) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  type Testimonial = {
    id : Nat;
    clientName : Text;
    designation : Text;
    company : Text;
    testimonialText : Text;
    rating : Nat; // 1-5
  };

  type ServiceInterest = {
    #managed_it;
    #cyber_security;
    #erp_implementation;
    #cloud_services;
    #other;
  };

  type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    organization : Text;
    serviceInterest : ServiceInterest;
    message : Text;
    timestamp : Int;
  };

  let contactInquiries = Map.empty<Nat, ContactInquiry>();
  var nextInquiryId = 1;

  let testimonials = Map.empty<Nat, Testimonial>();
  var nextTestimonialId = 1;

  // Contact Inquiries
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, organization : Text, serviceInterest : ServiceInterest, message : Text, timestamp : Int) : async () {
    let inquiry : ContactInquiry = {
      id = nextInquiryId;
      name;
      email;
      phone;
      organization;
      serviceInterest;
      message;
      timestamp;
    };
    contactInquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    contactInquiries.values().toArray();
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    contactInquiries.size();
  };

  // Testimonials
  public shared ({ caller }) func addTestimonial(clientName : Text, designation : Text, company : Text, testimonialText : Text, rating : Nat) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let testimonial : Testimonial = {
      id = nextTestimonialId;
      clientName;
      designation;
      company;
      testimonialText;
      rating;
    };
    testimonials.add(nextTestimonialId, testimonial);
    nextTestimonialId += 1;
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };
};
