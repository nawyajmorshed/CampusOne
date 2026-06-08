// ─────────────────────────────────────────────────────────────────────────────
// CampusOne — Navigation Types
// Every screen's params are typed here. TypeScript will catch wrong params.
// ─────────────────────────────────────────────────────────────────────────────

export type AuthStackParams = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

export type BottomTabParams = {
  Home: undefined;
  Explore: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type ReportsStackParams = {
  ReportsList: undefined;
  ReportDetail: { code: string };
  ReportForm: { editCode?: string };
};

export type LostFoundStackParams = {
  LostFoundBrowse: undefined;
  LostFoundDetail: { id: string };
  LostFoundPost: undefined;
  LostFoundEdit: { id: string };
};

export type EventsStackParams = {
  EventsBrowse: undefined;
  EventDetail: { id: string };
  EventPost: undefined;
};

export type AnnouncementsStackParams = {
  AnnouncementsList: undefined;
  AnnouncementDetail: { id: string };
  AnnouncementPost: undefined;
};

export type MarketplaceStackParams = {
  MarketplaceBrowse: undefined;
  ListingDetail: { code: string };
  ListingPost: undefined;
  ListingEdit: { code: string };
};

export type RidesStackParams = {
  RidesBrowse: undefined;
  RideOffer: undefined;
};

export type BloodStackParams = {
  BloodMain: undefined;
  BloodRequest: undefined;
  DonorRegister: undefined;
};

export type BusStackParams = {
  BusList: undefined;
  BusDetail: { id: string };
};

export type JobsStackParams = {
  JobsBrowse: undefined;
  JobDetail: { code: string };
  JobPost: undefined;
  JobEdit: { code: string };
};

export type MedicalStackParams = {
  DoctorList: undefined;
  DoctorDetail: { id: string };
  BookAppointment: { doctorId: string };
  MyAppointments: undefined;
};

export type StudyHubStackParams = {
  StudyHubHome: undefined;
  StudyHubBrowse: undefined;
  StudyHubSection: { sectionId: string };
  StudyHubCourse: { courseId: string; sectionId: string };
  StudyHubManage: { sectionId: string };
};

export type ClubsStackParams = {
  ClubsList: undefined;
  ClubDetail: { id: string };
  ClubManage: { id: string };
  ClubPost: { clubId: string };
};

export type FacultyStackParams = {
  FacultyBrowse: undefined;
  FacultyProfile: { id: string };
};

export type DirectoryStackParams = {
  DirectorySearch: undefined;
};

export type AdminStackParams = {
  AdminDashboard: undefined;
  AdminAllReports: undefined;
  AdminManageUsers: undefined;
  AdminManageFaculty: undefined;
  AdminManageStudyHub: undefined;
  AdminManageClubs: undefined;
};

export type StaffStackParams = {
  StaffDashboard: undefined;
  StaffAssigned: undefined;
};
