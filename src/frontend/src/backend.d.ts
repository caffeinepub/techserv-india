import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Testimonial {
    id: bigint;
    clientName: string;
    designation: string;
    testimonialText: string;
    company: string;
    rating: bigint;
}
export interface ContactInquiry {
    id: bigint;
    name: string;
    email: string;
    serviceInterest: ServiceInterest;
    message: string;
    timestamp: bigint;
    organization: string;
    phone: string;
}
export enum ServiceInterest {
    other = "other",
    erp_implementation = "erp_implementation",
    cloud_services = "cloud_services",
    cyber_security = "cyber_security",
    managed_it = "managed_it"
}
export interface backendInterface {
    addTestimonial(clientName: string, designation: string, company: string, testimonialText: string, rating: bigint): Promise<void>;
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getInquiryCount(): Promise<bigint>;
    submitInquiry(name: string, email: string, phone: string, organization: string, serviceInterest: ServiceInterest, message: string, timestamp: bigint): Promise<void>;
}
