/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GetEmployeeAttendancePerformanceResponse {
  /** @format date-time */
  clockInTime: string;
  /** @format date-time */
  previousClockInTime: string;
  differenceInHour: number;
  differenceInMinute: number;
}

export interface AddAttendanceRequestDto {
  type: AddAttendanceRequestDtoTypeEnum;
  branchId?: number;
  /** @format date-time */
  inTime: string;
  /** @format date-time */
  outTime: string;
}

export interface EmployeeDepartment {
  id: number;
  departmentName: string;
}

export interface OvertimeEmployee {
  id: number;
  employee: Employee;
  overtime: Overtime;
}

export interface LeaveTypeLos {
  id: number;
  startYear: number;
  endYear: number;
  additionalQuota: number;
  leaveType: LeaveType;
}

export interface LeaveTypeApprovalPosition {
  id: number;
  position: EmployeePosition;
  leaveType: LeaveType;
}

export interface LeaveTypeApprovalLevel {
  id: number;
  levelsAbove: number;
  leaveType: LeaveType;
}

export interface LeaveTypeCc {
  id: number;
  cc: EmployeePosition;
  leaveType: LeaveType;
}

export interface ApprovalLevel {
  id: number;
  approval: Approval;
  numLevelsAbove: number;
}

export interface ApprovalPosition {
  id: number;
  approval: Approval;
  position: EmployeePosition;
}

export interface ApprovalSignPosition {
  id: number;
  approval: Approval;
  positionX: number;
  positionY: number;
  width: number;
  height: number;
}

export interface EmployeeOvertimeSummary {
  id: number;
  employee: Employee;
  /** @format date-time */
  frontPeriodTime: string;
  /** @format date-time */
  backPeriodTime: string;
  totalOvertimes: number;
  totalHours: number;
  totalMeals: number;
  totalTransports: number;
  approvals: Approval[];
  file: File;
  employeeOvertimes: EmployeeOvertime[];
}

export interface EmployeeOvertime {
  id: number;
  employee: Employee;
  overtime: Overtime;
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  location: string;
  isMeals: boolean;
  isTransport: boolean;
  reason: string;
  result: string;
  remarks: string;
  file: File;
  employeeOvertimeSummary: EmployeeOvertimeSummary[];
  approvals: Approval[];
}

export interface ExpenseEmployee {
  id: number;
  employee: Employee;
  expense: Expense;
}

export interface ExpenseTag {
  id: number;
  tag: Tag;
  expense: Expense;
}

export interface ExpensePosition {
  id: number;
  position: EmployeePosition;
  expense: Expense;
}

export interface ExpenseApprovalPosition {
  id: number;
  position: EmployeePosition;
  expense: Expense;
}

export interface ExpenseApprovalLevel {
  id: number;
  levelAbove: number;
  expense: Expense;
}

export interface Expense {
  id: number;
  remark: string;
  employees: ExpenseEmployee[];
  tags: ExpenseTag[];
  positions: ExpensePosition[];
  approvalsPosition: ExpenseApprovalPosition[];
  approvalsLevel: ExpenseApprovalLevel[];
  expenses: EmployeeExpense[];
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface EmployeeExpense {
  id: number;
  expense: Expense;
  employee: Employee;
  /** @format date-time */
  transactionDate: string;
  description: string;
  amount: number;
  remark: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  employeeExpenseSummaries: EmployeeExpenseSummary[];
}

export interface EmployeeExpenseSummary {
  id: number;
  employee: Employee;
  totalExpenses: number;
  file: File;
  remark: string;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  approvals: Approval[];
  employeeExpenses: EmployeeExpense[];
}

export interface BankAccountName {
  id: number;
  name: string;
}

export interface BankAccountType {
  id: number;
  name: string;
}

export interface FinanceTaxType {
  id: number;
  code: string;
  name: string;
  rate: number;
  taxes: FinanceTax;
}

export interface FinanceCashoutItemsTax {
  id: number;
  financeCashoutItems: FinanceCashoutItems;
  tax: FinanceTax;
}

export interface FinanceCashoutItemsOrgTax {
  id: number;
  financeCashoutItemsOrg: FinanceCashoutItemsOrg;
  tax: FinanceTax;
}

export interface PrivateInsurance {
  id: number;
  name: string;
  amount: number;
  provider: ClientOrg;
}

export interface EmployeeSalaryBenefits {
  id: number;
  employee: Employee;
  name: string;
  amount: number;
  isTaxable: boolean;
  isIncludedInCashOut: boolean;
}

export interface EmployeeSalaryDeduction {
  id: number;
  employee: Employee;
  name: string;
  amount: number;
}

export interface SalaryCalculation {
  id: number;
  employee: Employee;
  month: SalaryCalculationMonthEnum;
  year: number;
  totalSalary: number;
  pph: FinanceTax;
  bpjsKesehatan: number;
  bpjsTK: number;
  privateInsurance: PrivateInsurance;
  benefits: EmployeeSalaryBenefits[];
  deductions: EmployeeSalaryDeduction[];
}

export interface ClientProject {
  id: number;
  client: Client;
  project: Project;
}

export interface Project {
  id: number;
  name: string;
  clientProjects: ClientProject[];
}

export interface FinanceCashinTransaction {
  id: number;
  financeCashin: FinanceCashin;
  transaction: FinanceTransaction;
  receiveBy: Employee;
  /** @format date-time */
  receiveDate: string;
}

export interface FinanceCashin {
  id: number;
  name: string;
  description: string;
  project: Project;
  /** @format date-time */
  invoiceDate: string;
  invoiceFile: File;
  billedCurrency: FinanceCurrency;
  billedAmount: number;
  /** @format date-time */
  deadline: string;
  submitBy: Employee;
  /** @format date-time */
  submitDate: string;
  status: object;
  transactions: FinanceCashinTransaction[];
  taxes: FinanceCashinTax[];
}

export interface FinanceCashinTax {
  id: number;
  financeCashin: FinanceCashin;
  tax: FinanceTax;
}

export interface FinanceTax {
  id: number;
  taxType: FinanceTaxType;
  currency: FinanceCurrency;
  amount: number;
  isPaid: boolean;
  financeCashoutItemsTax: FinanceCashoutItemsTax;
  financeCashoutItemsOrgTax: FinanceCashoutItemsOrgTax;
  salaryCalculation: SalaryCalculation;
  financeCashinTax: FinanceCashinTax;
  billing: Billing;
}

export interface Billing {
  id: number;
  name: string;
  description: string;
  /** @format date-time */
  billingDate: string;
  billingFileId: File;
  billedCurrencyId: FinanceCurrency;
  billedAmount: number;
  billingOwrnerOrgId: ClientOrg;
  /** @format date-time */
  deadline: string;
  submitById: Employee;
  /** @format date-time */
  submitDate: string;
  isPaid: boolean;
  taxes: FinanceTax[];
}

export interface ClientOrg {
  id: number;
  name: string;
  clients: Client[];
  bankAccount: BankAccount;
  financeCashoutItemsOrg: FinanceCashoutItemsOrg[];
  billing: Billing[];
}

export interface Client {
  id: number;
  clientOrg: ClientOrg;
  name: string;
  phoneNumber: string;
  email: string;
  jobPosition: string;
  jobDepartment: string;
  bankAccount: BankAccount;
  clientProjects: ClientProject[];
}

export interface BankAccount {
  id: number;
  name: BankAccountName;
  type: BankAccountType;
  number: string;
  account_name: string;
  clients: Client[];
  employee: Employee;
  clientOrg: ClientOrg;
}

export interface FinanceTransaction {
  id: number;
  /** @format date-time */
  date: string;
  bankAccount: BankAccount;
  currency: FinanceCurrency;
  amount: number;
  receiptFile: File;
  financeCashoutItems: FinanceCashoutItems;
  financeCashInTransaction: FinanceCashinTransaction;
}

export interface FinanceCashoutItemsOrg {
  id: number;
  submitById: Employee;
  financeCashout: FinanceCashout;
  financeCashoutItemType: FinanceCashoutItemType;
  transaction: FinanceTransaction;
  status: object;
  itemId: number;
  amount: number;
  currency: FinanceCurrency;
  billing_receipt: File;
  ownedOrg: ClientOrg;
  taxes: FinanceCashoutItemsOrgTax[];
}

export interface FinanceCashoutItemType {
  id: number;
  name: string;
  isRecurring: boolean | null;
  financeCashoutItems: FinanceCashoutItems[];
  financeCashoutItemsOrg: FinanceCashoutItemsOrg[];
}

export interface FinanceCashoutItems {
  id: number;
  submitById: Employee;
  financeCashout: FinanceCashout;
  financeCashoutItemType: FinanceCashoutItemType;
  transaction: FinanceTransaction;
  status: object;
  itemId: number;
  amount: number;
  currency: FinanceCurrency;
  billing_receipt: File;
  ownedEmployee: Employee;
  taxes: FinanceCashoutItemsTax[];
}

export interface FinanceCurrency {
  id: number;
  name: string;
  totalSpentCashout: FinanceCashoutTotalSpent[];
  cashoutItems: FinanceCashoutItems[];
  tax: FinanceTax;
}

export interface FinanceCashoutTotalSpent {
  id: number;
  financeCashout: FinanceCashout;
  amount: number;
  ownerType: string;
  currency: FinanceCurrency;
}

export interface FinanceCashout {
  id: number;
  title: string;
  submitById: Employee;
  /** @format date-time */
  submitDate: string;
  /** @format date-time */
  cutOffDate: string;
  /** @format date-time */
  expensesStartDate: string;
  /** @format date-time */
  expensesEndDate: string;
  file: File;
  status: object;
  totalSpent: FinanceCashoutTotalSpent[];
  financeCashoutItems: FinanceCashoutItems[];
  financeCashoutItemsOrg: FinanceCashoutItemsOrg[];
  approvals: Approval[];
}

export interface Approval {
  id: number;
  requestedBy: Employee;
  /** @format date-time */
  requestDate: string;
  reviewedBy: Employee;
  /** @format date-time */
  reviewDate: string;
  /** @format date-time */
  expDate: string;
  isApproved: boolean;
  approvalLevel: ApprovalLevel;
  approvalPosition: ApprovalPosition;
  signPosition: ApprovalSignPosition;
  employeeLeaves: EmployeeLeave[];
  employeeOvertimes: EmployeeOvertime[];
  employeeOvertimeSummaries: EmployeeOvertimeSummary[];
  employeeExpenseSummaries: EmployeeExpenseSummary[];
  financeCashout: FinanceCashout[];
}

export interface EmployeeLeave {
  id: number;
  employee: Employee;
  leaveType: LeaveType;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
  reason: string;
  duration: number;
  file: File;
  approvals: Approval[];
}

export interface LeaveType {
  id: number;
  name: string;
  description: string;
  quota: number;
  isPaid: boolean;
  isCarryForward: boolean;
  isProRate: boolean;
  useFilterTag: boolean;
  useFilterLengthOfService: boolean;
  isActive: boolean;
  tags: LeaveTypeTag[];
  los: LeaveTypeLos[];
  approvalsPosition: LeaveTypeApprovalPosition[];
  approvalsLevel: LeaveTypeApprovalLevel[];
  ccs: LeaveTypeCc[];
  leaves: EmployeeLeave[];
}

export interface LeaveTypeTag {
  id: number;
  leaveType: LeaveType;
  tag: Tag;
}

export interface Tag {
  id: number;
  name: string;
  leaveTypeTags: LeaveTypeTag[];
  overtimeTag: OvertimeTag;
  expenseTag: ExpenseTag;
}

export interface OvertimeTag {
  id: number;
  tag: Tag;
  overtime: Overtime;
}

export interface OvertimeApprovalPosition {
  id: number;
  position: EmployeePosition;
  overtime: Overtime;
}

export interface OvertimeApprovalLevel {
  id: number;
  levelsAbove: number;
  overtime: Overtime;
}

export interface Overtime {
  id: number;
  rate: number;
  quota: number;
  resetPeriod: OvertimeResetPeriodEnum;
  isMeals: boolean;
  mealsRate: number;
  isTransport: boolean;
  transportRate: number;
  employees: OvertimeEmployee[];
  tags: OvertimeTag[];
  positions: OvertimePosition[];
  approvalsPosition: OvertimeApprovalPosition[];
  approvalsLevel: OvertimeApprovalLevel[];
  overtimes: EmployeeOvertime[];
}

export interface OvertimePosition {
  id: number;
  position: EmployeePosition;
  overtime: Overtime;
}

export interface EmployeePosition {
  id: number;
  name: string;
  parentPosition: EmployeePosition;
  subPositions: EmployeePosition[];
  department: EmployeeDepartment;
  overtimePosition: OvertimePosition;
}

export interface EmployeeAttendance {
  id: number;
  branch: Branch;
  employee: Employee;
  inLatitude: number;
  inLongitude: number;
  /** @format date-time */
  inTime: string;
  outLatitude: number;
  outLongitude: number;
  /** @format date-time */
  outTime: string;
  attendanceType: EmployeeAttendanceAttendanceTypeEnum;
  approval: Approval;
}

export interface EmployeeTag {
  id: number;
  employee: Employee;
  tag: Tag;
}

export interface AccessLevelScope {
  id: number;
  accessLevel: AccessLevel;
  scope: object;
}

export interface AccessLevel {
  id: number;
  name: string;
  description: string;
  level: number;
  accessLevelScopes: AccessLevelScope[];
}

export interface EmployeePtkp {
  id: number;
  name: string;
  amount: number;
}

export interface EmployeeSalaryBase {
  id: number;
  employee: Employee;
  baseSalary: number;
}

export interface ConsumableItems {
  id: number;
  name: string;
  imgFile: File;
  quantity: number;
  purchases: ConsumableItemsPurchase[];
}

export interface ConsumableItemsPurchase {
  id: number;
  item: ConsumableItems;
  employee: Employee;
  /** @format date-time */
  purchase_date: string;
  supplier: string;
  initial_quantity: number;
  quantity_purchased: number;
  cost_per_unit: number;
}

export interface NonConsumableItems {
  id: number;
  name: string;
  imgFile: File;
  detailed_information: string;
  unit_price: number;
  current_assignment: NonConsumableItemsTransfer | null;
  status: number;
  remarks: string;
  transfers: NonConsumableItemsTransfer[];
}

export interface NonConsumableItemsTransfer {
  id: number;
  nc_item_id: NonConsumableItems;
  from_employee: Employee;
  to_employee: Employee;
}

export interface MenuItem {
  id: number;
  name: string;
  href: string;
  userMenuItems: UserMenuItem[];
}

export interface UserMenuItem {
  id: number;
  is_enabled: boolean;
  display_order: number;
  user: User;
  menuItem: MenuItem;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  employee: Employee;
  userMenuItems: UserMenuItem[];
}

export interface ContactInformation {
  id: number;
  employee: Employee;
  phoneNumber: string;
  homeNumber: string;
  personalEmail: string;
}

export interface Employee {
  id: number;
  employeeNumber: string;
  firstName: string;
  lastName: string;
  /** @format date-time */
  dob: string;
  /** @format date-time */
  startDate: string;
  email: string;
  employmentType: EmployeeEmploymentTypeEnum;
  gender: EmployeeGenderEnum;
  position: EmployeePosition;
  manager: Employee;
  avatar: File;
  bankAccount: BankAccount;
  attendances: EmployeeAttendance[];
  tags: EmployeeTag[];
  accessLevel: AccessLevel;
  employeePtkp: EmployeePtkp;
  overtimeEmployee: OvertimeEmployee;
  expenseEmployee: ExpenseEmployee;
  employeeSalaryBase: EmployeeSalaryBase;
  employeeSalaryBenefits: EmployeeSalaryBenefits[];
  consumableItemsPurchase: ConsumableItemsPurchase[];
  fromEmployeeInventoryNonConsumableItemsTransfer: NonConsumableItemsTransfer[];
  toEmployeeInventoryNonConsumableItemsTransfer: NonConsumableItemsTransfer[];
  financeCashoutItems: FinanceCashoutItems[];
  face: File;
  user: User;
  contactInformation: ContactInformation;
}

export interface File {
  id: number;
  path: string;
  uploadedBy: Employee;
  /** @format date-time */
  uploadedAt: string;
  employeeLeave: EmployeeLeave;
  employeeOvertime: EmployeeOvertime;
  financeCashout: FinanceCashout;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  image: File;
}

export interface CreateEmployeeAttendanceDto {
  branch?: number;
  inLatitude: number;
  inLongitude: number;
  attendanceType: CreateEmployeeAttendanceDtoAttendanceTypeEnum;
}

export interface UpdateEmployeeAttendanceDto {
  outLatitude: number;
  outLongitude: number;
}

export interface LetterType {
  id: number;
  name: string;
  category: LetterTypeCategoryEnum;
  variables: object;
}

export interface Letter {
  id: number;
  type: LetterType;
  content: object;
  filePath: string;
  approval: Approval;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface EmployeeLetter {
  id: number;
  employee: Employee;
  letter: Letter;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface ApprovalDto {
  id: number;
  requestedBy: {
    id: number;
    name: string;
  };
  /** @format date-time */
  requestDate: string;
  reviewedBy: {
    id: number;
    name: string;
  };
  /** @format date-time */
  reviewDate: string;
  isApproved: boolean;
  linkedEntity: {
    attendance?: EmployeeAttendance;
    expense?: EmployeeExpense;
    expenseSummary?: EmployeeExpenseSummary;
    leave?: EmployeeLeave;
    overtime?: EmployeeOvertime;
    letter?: EmployeeLetter;
    overtimeSummary?: EmployeeOvertimeSummary;
    financeCashout?: FinanceCashout;
  };
}

export interface ApprovalListDto {
  list?: ApprovalDto[];
}

export type ApprovalCountDto = object;

export interface ApproveApprovalDto {
  isApproved: boolean;
}

export interface ClickApprovalDocumentDto {
  positionX: number;
  positionY: number;
}

export interface CreateFinanceCashoutRequestDto {
  title: string;
  /** @format date-time */
  expenseStartDate: string;
  /** @format date-time */
  expenseEndDate: string;
  /** @format date-time */
  cutOffDate: string;
  includeEmployeeExpenses?: boolean;
  includeTax?: boolean;
  includeBilling?: boolean;
  includeEmployeeSalary?: boolean;
  includeBPJS?: boolean;
  includePrivateInsurance?: boolean;
}

export interface UpdateFinanceCashoutRequestDto {
  title?: string;
  /** @format date-time */
  cutOffDate?: string;
}

export interface CreateFinanceCashoutItemRequestDto {
  financeCashoutId: number;
  financeCashoutItemTypeId: number;
  itemId?: number;
  amount: number;
  currencyId: number;
  ownerType: CreateFinanceCashoutItemRequestDtoOwnerTypeEnum;
  ownedById: number;
  /** @format binary */
  billingFile?: File;
  taxTypeIds?: number[];
}

export interface UpdateFinanceCashoutItemRequestDto {
  financeCashoutId?: number;
  financeCashoutItemTypeId?: number;
  amount?: number;
  currencyId?: number;
  ownerType: UpdateFinanceCashoutItemRequestDtoOwnerTypeEnum;
  /** @format binary */
  billingFile?: File;
  taxTypeIds?: number[];
}

export interface UploadFinanceCashoutItemsReceiptRequestDto {
  financeCashoutItemId: number;
  bankAccountId: number;
  currencyId: number;
  ownerType: UploadFinanceCashoutItemsReceiptRequestDtoOwnerTypeEnum;
  /** @format binary */
  receiptFile: File;
}

export interface CreateFinanceCashoutItemTypeRequestDto {
  name: string;
}

export interface UpdateFinanceCashoutItemTypeRequestDto {
  name?: string;
}

export interface CreateFinanceTransactionRequestDto {
  /** @format date-time */
  date: string;
  bank_account: BankAccount;
  currency: FinanceCurrency;
  amount: number;
  receipt_file: File;
}

export interface CreateFinanceCurrencyRequestDto {
  name?: string;
}

export interface EmployeeExpenseRequestDto {
  /** @format date-time */
  date: string;
  amount: number;
  description: string;
  remark: string;
}

export interface CreateEmployeeExpenseRequestDto {
  expenses: EmployeeExpenseRequestDto[];
}

export interface UpdateEmployeeExpenseRequestDto {
  /** @format date-time */
  date?: string;
  amount?: number;
  description?: string;
  remark?: string;
}

export interface PreviewEmployeeExpenseSummaryRequestDto {
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  filterByTransactionDate?: boolean;
  filterBySubmitDate?: boolean;
  filterByEmployeeIds?: number[];
  filterByExpenseIds?: number[];
}

export interface CreateEmployeeExpenseSummaryRequestDto {
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  filterByTransactionDate?: boolean;
  filterBySubmitDate?: boolean;
  filterByEmployeeIds?: number[];
  filterByExpenseIds?: number[];
  remark?: string;
  generateDocument: boolean;
}

export interface CreateEmployeeDto {
  employeeNumber: string;
  firstName: string;
  lastName: string;
  /** @format date-time */
  dob: string;
  /** @format date-time */
  startDate: string;
  email: string;
  employmentType: CreateEmployeeDtoEmploymentTypeEnum;
  gender: CreateEmployeeDtoGenderEnum;
  position: number;
  manager?: number;
  accessLevel?: number;
  phoneNumber?: string;
  homeNumber?: string;
  personalEmail?: string;
}

export interface UpdateEmployeeDto {
  employeeNumber?: string;
  firstName?: string;
  lastName?: string;
  /** @format date-time */
  dob?: string;
  /** @format date-time */
  startDate?: string;
  email?: string;
  employmentType?: UpdateEmployeeDtoEmploymentTypeEnum;
  gender?: UpdateEmployeeDtoGenderEnum;
  position?: number;
  manager?: number;
  accessLevel?: number;
  phoneNumber?: string;
  homeNumber?: string;
  personalEmail?: string;
}

export interface BulkCreateEmployeeDto {
  /** @format binary */
  file?: File;
}

export interface EmployeeLetterDto {
  letterTypeId: number;
  employeeId: number;
  content: string;
}

export interface CreatePositionRequestDto {
  name: string;
  department: number;
  parentPosition: number;
}

export interface UpdatePositionRequestDto {
  name?: string;
  department?: number;
  parentPosition?: number;
}

export interface CreateEmployeeDepartmentDto {
  departmentName: string;
}

export interface UpdateEmployeeDepartmentDto {
  departmentName?: string;
}

export interface CreateUserDto {
  username: string;
  email: string;
  /**
   * @minLength 6
   * @maxLength 20
   */
  password: string;
  employee: Employee;
}

export interface UploadFileDto {
  path: string;
  uploadedBy: number;
  /** @format binary */
  file?: File;
}

export interface CreateSalaryBaseDto {
  employeeId: number;
  amount: number;
}

export interface SalaryBenefitsAndDeductionResponseDto {
  employee: Employee;
  salaryBenefits: EmployeeSalaryBenefits[];
  salaryDeductions: EmployeeSalaryDeduction[];
}

export interface CreateSalaryBenefitsDto {
  employeeId: number;
  name: string;
  amount: number;
  isTaxable: boolean;
  isIncludedInCashOut: boolean;
}

export interface CreateSalaryDeductionDto {
  employeeId: number;
  name: string;
  amount: number;
}

export interface CreatePrivateInsuranceDto {
  providerId: number;
  amount: number;
  name: string;
}

export interface CreateSalaryCalculationDto {
  month: number;
  year: number;
  privateInsuranceId: number;
}

export interface SalaryCalculationCashoutItem {
  employee: Employee;
  paidSalary: number;
  bpjsKesehatan: number;
  bpjsTK: number;
  privateInsurance: PrivateInsurance;
  pph: FinanceTax;
  benefits: EmployeeSalaryBenefits[];
}

export interface SalaryCalculationCashoutItems {
  month: SalaryCalculationCashoutItemsMonthEnum;
  year: number;
  items: SalaryCalculationCashoutItem[];
}

export interface AssignScopeRequestDto {
  accessLevelId: number;
  scopes: string[];
}

export interface CreateAccessLevelRequestDto {
  name: string;
  description?: string;
  level: number;
}

export interface UpdateAccessLevelRequestDto {
  name?: string;
  description?: string;
  level?: number;
}

export interface CreateContactInformationRequestDto {
  phoneNumber?: string;
  homeNumber?: string;
  personalEmail?: string;
}

export interface CreateFinanceTaxDto {
  taxTypeId: number;
  transactionId: number;
  currencyId: number;
}

export interface UpdateFinanceTaxDto {
  taxTypeId?: number;
  transactionId?: number;
  currencyId?: number;
}

export interface CreateFinanceTaxTypeDto {
  code?: string;
  name: string;
  percentage: number;
}

export interface UpdateFinanceTaxTypeDto {
  code?: string;
  name?: string;
  percentage?: number;
}

export interface CreateClientOrgDto {
  name: string;
}

export interface UpdateClientOrgDto {
  name?: string;
}

export interface LeaveSummary {
  leaveType: LeaveType;
  quota: number;
  used: number;
  remaining: number;
}

export interface LeaveSummaryResponseDto {
  employee: Employee;
  year: number;
  leaveSummaries: LeaveSummary[];
}

export interface RequestEmployeeLeaveDto {
  leaveTypeId: number;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
  reason: string;
  generateDocument: boolean;
}

export interface ReportEmployeeOvertimeRequestDto {
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  location: string;
  isMeals: boolean;
  isTransport: boolean;
  reason: string;
  result: string;
  remarks: string;
  generateDocument: boolean;
}

export interface GetOvertimeSummaryRequestDto {
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  ids: number[];
  generateDocument: boolean;
}

export interface Notification {
  id: number;
  topic: NotificationTopicEnum;
  title: string;
  body: string;
  data: object;
  user: User;
  isRead: boolean;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
}

export interface CreateNotificationRequestDto {
  topic: CreateNotificationRequestDtoTopicEnum;
  title: string;
  body: string;
  data: object;
}

export interface SendNotificationRequestDto {
  title: string;
  body: string;
  token: string;
  data: object;
  click_action: string;
}

export interface UserToken {
  id: number;
  user: User;
  token: string;
  device_type: string;
}

export interface RegisterTokenRequestDto {
  token: string;
  device_type: string;
}

export interface UploadEmployeePhotoDto {
  /** @format binary */
  file: File;
}

export interface SendEmailDto {
  to: string;
  subject: string;
  text: string;
  s3URL?: string;
}

export interface SignatureDto {
  id: number;
  name: string;
  path: string;
  type: SignatureDtoTypeEnum;
}

export interface Signature {
  id: number;
  name: string;
  file: File;
  type: SignatureTypeEnum;
}

export interface SignatureEmployeeDto {
  id: number;
  name: string;
}

export interface UploadSignatureDto {
  name?: string;
  type: UploadSignatureDtoTypeEnum;
  employeeIds?: number[];
  /** @format binary */
  file?: File;
}

export interface CreateExpenseRequestDto {
  remarks?: string;
  employeeIds?: number[];
  positionIds?: number[];
  tagIds?: number[];
  approvalsPositionIds?: number[];
  approvalsLevelIds?: number[];
}

export interface UpdateExpenseRequestDto {
  remarks?: string;
  employeeIds?: number[];
  positionIds?: number[];
  tagIds?: number[];
  approvalsPositionIds?: number[];
  approvalsLevelIds?: number[];
}

export interface TagResponseDto {
  id: number;
  name: string;
  leaveTypeTags: LeaveTypeTag[];
  overtimeTag: OvertimeTag;
  expenseTag: ExpenseTag;
}

export interface CreateTagRequestDto {
  name: string;
}

export interface CreateOvertimeRequestDto {
  rate: number;
  quota: number;
  resetPeriod: CreateOvertimeRequestDtoResetPeriodEnum;
  isMeals: boolean;
  mealsRate?: number;
  isTransport: boolean;
  transportRate?: number;
  employeeIds?: number[];
  tagIds?: number[];
  positionIds?: number[];
  approvalPositionIds?: number[];
  approvalLevels?: number[];
}

export interface UpdateOvertimeRequestDto {
  rate?: number;
  quota?: number;
  resetPeriod?: UpdateOvertimeRequestDtoResetPeriodEnum;
  isMeals?: boolean;
  mealsRate?: number;
  isTransport?: boolean;
  transportRate?: number;
  employeeIds?: number[];
  tagIds?: number[];
  positionIds?: number[];
  approvalPositionIds?: number[];
  approvalLevels?: number[];
}

export interface LeaveTypeLosDto {
  startYear: number;
  endYear: number;
  additionalQuota: number;
  leaveTypeId: number;
}

export interface CreateLeaveTypeRequestDto {
  name: string;
  description?: string;
  quota: number;
  isPaid: boolean;
  isCarryForward: boolean;
  isProRate: boolean;
  useFilterTag: boolean;
  useFilterLengthOfService: boolean;
  isActive: boolean;
  tags?: number[];
  los?: LeaveTypeLosDto[];
  approvalsPosition?: number[];
  approvalNumLevelsAbove?: number[];
  ccs?: number[];
}

export interface UpdateLeaveTypeDto {
  name?: string;
  description?: string;
  quota?: number;
  isPaid?: boolean;
  isCarryForward?: boolean;
  isProRate?: boolean;
  useFilterTag?: boolean;
  useFilterLengthOfService?: boolean;
  isActive?: boolean;
  tags?: number[];
  los?: LeaveTypeLosDto[];
  approvalsPosition?: number[];
  approvalNumLevelsAbove?: number[];
  ccs?: number[];
}

export interface CreateBankAccountRequestDto {
  bank_name_id: number;
  bank_type_id: number;
  bank_account_number: string;
  bank_account_name: string;
}

export interface CreateBankAccountNameRequestDto {
  name?: string;
}

export interface CreateBillingRequestDto {
  name: string;
  description?: string;
  /** @format date-time */
  billingDate: string;
  billedCurrencyId: number;
  billedAmount: number;
  billingOwrnerOrgId: number;
  /** @format date-time */
  deadline: string;
  /** @format binary */
  billingFile: File;
  taxTypeIds: number[];
}

export interface UpdateBillingRequestDto {
  name?: string;
  description?: string;
  /** @format date-time */
  billingDate?: string;
  billedCurrencyId?: number;
  billedAmount?: number;
  billingOwrnerOrgId?: number;
  /** @format date-time */
  deadline?: string;
  isPaid?: boolean;
  /** @format binary */
  billingFile?: File;
  taxTypeIds?: number[];
}

export interface CreateBranchDto {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  /** @format binary */
  image?: File;
}

export interface UpdateBranchDto {
  name?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  /** @format binary */
  image?: File;
}

export interface CompanyProfileResponseDto {
  name: string;
  url: string;
  logo: string;
  clockInTime: string;
  clockOutTime: string;
}

export interface CompanyProfileUpdateRequestDto {
  name?: string;
  url?: string;
  /** @format binary */
  file?: File;
  clockInTime?: string;
  clockOutTime?: string;
}

export interface CreateHolidayDto {
  name: string;
  /** @format date-time */
  holiday_date: string;
  /** @min 1 */
  created_by?: number;
}

export interface UpdateHolidayDto {
  name?: string;
  /** @format date-time */
  holiday_date?: string;
  /** @min 1 */
  created_by?: number;
}

export interface GetEmployeeLeaveAdjustmentRequestDto {
  leaveAdjustmentIds: number[];
}

export interface EmployeeLeaveAdjustment {
  id: number;
  year: number;
  amount: number;
  employee: Employee;
  leaveType: LeaveType;
}

export interface EmployeeLeaveAdjustmentDto {
  employeeId: number;
  year: number;
  amount: number;
  leaveTypeId: number;
  leaveAdjustmentId?: number;
}

export interface CreateEmployeeLeaveAdjustmentRequestDto {
  employeeLeaveAdjustments: EmployeeLeaveAdjustmentDto[];
}

export interface UpdateEmployeeLeaveAdjustmentRequestDto {
  employeeLeaveAdjustments?: EmployeeLeaveAdjustmentDto[];
}

export interface CreateLetterTypeDto {
  name: string;
  variables: object;
  category: CreateLetterTypeDtoCategoryEnum;
}

export interface UploadTaxStatementDto {
  taxYear: number;
  employeeId: number;
  uploadedById: number;
  /** @format binary */
  file: File;
}

export interface EmployeeTax {
  id: number;
  employee: Employee;
  taxYear: number;
  filePath: string;
  /** @format date-time */
  uploadDate: string;
  uploadedBy: Employee;
}

export interface EmployeeSalary {
  id: number;
  employee: Employee;
  month: EmployeeSalaryMonthEnum;
  year: number;
  uploadedBy: Employee;
  /** @format date-time */
  uploadDate: string;
  filePath: string;
}

export interface UploadSalaryDto {
  employeeId: number;
  month: UploadSalaryDtoMonthEnum;
  year: number;
  /** @format binary */
  file: File;
}

export interface LinkedEmployeeDto {
  id: number;
  name: string;
  color: string;
  user?: User;
}

export interface DocumentSignDto {
  id: number;
  name: string;
  signedFile: File;
  /** @format date-time */
  publishedAt: string;
  status?: DocumentSignDtoStatusEnum;
  linkedEmployees?: LinkedEmployeeDto[];
}

export interface UploadDocumentDto {
  files?: File[];
}

export interface PublishDocumentDto {
  name: string;
  ccs: number[];
}

export interface UpdateDocumentSignNameDto {
  name: string;
}

export interface DocumentSign {
  id: number;
  name: string;
  originalFile: File;
  signedFile: File;
  /** @format date-time */
  publishedAt: string;
}

export interface UpdateDocumentSignCcDto {
  ccs: number[];
}

export interface TogglePlaceholderDto {
  positionX: number;
  positionY: number;
  page: number;
  color: string;
  type?: TogglePlaceholderDtoTypeEnum;
}

import { SignPlaceholderDtoTypeEnum } from "./path/to/enum/module";

export interface SignPlaceholderDto {
  positionX?: number;
  positionY?: number;
  page?: number;
  color?: string;
  type?: SignPlaceholderDtoTypeEnum;
  signatureId?: number;
}

export interface GoogleAuthDto {
  idToken: string;
}

export interface JwtResponseDto {
  user: User;
  bearerToken: string;
}

export interface LocalAuthDto {
  email: string;
  password: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface EmployeeTagResponseDto {
  id?: number;
  tag?: TagResponseDto;
  employee: {
    id: number;
    employeeNumber: string;
    firstName: string;
    lastName: string;
  };
}

export type EmployeeTagPair = object;

export interface UpdateEmployeeTagRequestDto {
  filterByTag: boolean;
  employeeTags: EmployeeTagPair[];
}

export interface CreateNewsCrudDto {
  title: string;
  description: string;
  body: string;
  employee_id: number;
  /** @format binary */
  file?: File;
}

export interface UpdateNewsCrudDto {
  title?: string;
  description?: string;
  body?: string;
  employee_id?: number;
  /** @format binary */
  file?: File;
}

export interface News {
  id: number;
  title: string;
  description: string;
  body: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  employee_id: User;
  image_id: File;
  comments: NewsComment[];
}

export interface NewsComment {
  id: number;
  news_id: number;
  employee_id: number;
  content: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  news: News;
  employee: User;
}

export interface CreateCommentDto {
  content: string;
  employee_id: number;
}

export interface UpdateNewsCommentDto {
  content?: string;
  employee_id?: number;
}

export interface CreateLikeDto {
  employee_id: number;
}

export interface PostConsumableItemsRequestDto {
  name: string;
  /** @format binary */
  imgFile?: File;
}

export interface PatchConsumableItemsRequestDto {
  name?: string;
  quantity?: number;
  /** @format binary */
  imgFile?: File;
}

export interface PostConsumableItemsPurchaseRequestDto {
  item_id: number;
  /** @format date-time */
  purchase_date: string;
  supplier: string;
  quantity: number;
  cost_per_unit: number;
}

export interface PostNonConsumableItemsRequestDto {
  name: string;
  detailed_information: string;
  /** @format binary */
  imgFile?: File;
  unit_price: number;
  status: number;
  remarks?: string;
}

export interface PatchNonConsumableItemsRequestDto {
  name?: string;
  detailed_information?: string;
  unit_price?: number;
  current_assignment?: number;
  status?: PatchNonConsumableItemsRequestDtoStatusEnum;
  remarks?: string;
  /** @format binary */
  imgFile?: File;
}

export interface PostNonConsumableItemsTransferRequestDto {
  nc_item_id: number;
  from_employee_id: number;
  to_employee_id: number;
}

export interface ChatMessageDto {
  message: string;
  timestamp: number;
  from: Employee;
  to: Employee;
}

export interface CreateClientDto {
  clientOrgId?: number;
  name: string;
  phoneNumber?: string;
  email?: string;
  jobPosition?: string;
  bankAccountId?: number;
}

export interface UpdateClientDto {
  clientOrgId?: number;
  name?: string;
  phoneNumber?: string;
  email?: string;
  jobPosition?: string;
  bankAccountId?: number;
}

export interface CreateProjectDto {
  name: string;
}

export interface UpdateProjectDto {
  name?: string;
}

export interface UpdateClientProjectDto {
  filterByClient: boolean;
  mainId: number;
  subIds: number[];
}

export interface DocuScanUpload {
  /** @format binary */
  file: File;
}

export interface ScannedLeaveDto {
  data: {
    startDate: string;
    endDate: string;
    leaveType: string;
    reason: string;
  };
}

export interface ScannedOvertimeDto {
  data: {
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    meals: number;
    transport: number;
    reason: string;
    result: string;
  };
}

export interface ExpenseDTO {
  /** @example "DD/MM/YYYY" */
  date: string;
  /** @example "Transport to Client" */
  description: string;
  /** @example "200.100" */
  total: string;
  /** @example "Using Online Transport" */
  remark: string;
}

export interface ScannedExpenseDto {
  data: {
    expenses: ExpenseDTO[];
  };
}

export interface NanonetsUploadDto {
  /**
   * Only JPG, JPEG, and PNG formats are allowed.
   * @format binary
   * @example "image.jpg"
   */
  file: File;
}

export interface RawTextNanonetsDto {
  data: string;
}

export interface UploadFacePhotoDto {
  /** @format binary */
  file: File;
}

export interface FacialArea {
  h: number;
  w: number;
  x: number;
  y: number;
}

export interface DataDto {
  detector_backend: string;
  distance: number;
  facial_areas: {
    img1: FacialArea;
    img2: FacialArea;
  };
  model: string;
  similarity_metric: string;
  threshold: number;
  time: number;
  verified: boolean;
}

export interface FaceVerificationDto {
  isVerified: boolean;
  data: DataDto;
}

export enum SalaryCalculationMonth {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export enum OvertimeResetPeriod {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

export enum EmployeeAttendanceAttendanceType {
  WFH = "WFH",
  WFO = "WFO",
  ABSENT = "ABSENT",
}

export enum EmployeeEmploymentType {
  PERMANENT = "PERMANENT",
  CONTRACT = "CONTRACT",
  TEMPORARY = "TEMPORARY",
  INTERNSHIP = "INTERNSHIP",
  VOLUNTEER = "VOLUNTEER",
  OTHER = "OTHER",
}

export enum EmployeeGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum DetailedAttendanceDtoAttendanceType {
  WFH = "WFH",
  WFO = "WFO",
  ABSENT = "ABSENT",
}

export enum AddAttendanceRequestDtoType {
  WFH = "WFH",
  WFO = "WFO",
  ABSENT = "ABSENT",
}

export enum CreateEmployeeAttendanceDtoAttendanceType {
  WFH = "WFH",
  WFO = "WFO",
  ABSENT = "ABSENT",
}

export enum AttendanceCountsDtoAttendanceType {
  WFH = "WFH",
  WFO = "WFO",
  ABSENT = "ABSENT",
}

export enum LetterTypeCategory {
  INTERNAL_EMPLOYEE = "INTERNAL_EMPLOYEE",
}

export enum CreateEmployeeDtoEmploymentType {
  PERMANENT = "PERMANENT",
  CONTRACT = "CONTRACT",
  TEMPORARY = "TEMPORARY",
  INTERNSHIP = "INTERNSHIP",
  VOLUNTEER = "VOLUNTEER",
  OTHER = "OTHER",
}

export enum CreateEmployeeDtoGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum UpdateEmployeeDtoEmploymentType {
  PERMANENT = "PERMANENT",
  CONTRACT = "CONTRACT",
  TEMPORARY = "TEMPORARY",
  INTERNSHIP = "INTERNSHIP",
  VOLUNTEER = "VOLUNTEER",
  OTHER = "OTHER",
}

export enum UpdateEmployeeDtoGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum NotificationTopic {
  DOCUMENT_SIGN = "DOCUMENT_SIGN",
  CHAT_MESSAGE = "CHAT_MESSAGE",
  APPROVAL_REQUEST = "APPROVAL_REQUEST",
  APPROVAL_APPROVED = "APPROVAL_APPROVED",
  ATTENDANCE = "ATTENDANCE",
}

export enum CreateNotificationRequestDtoTopic {
  DOCUMENT_SIGN = "DOCUMENT_SIGN",
  CHAT_MESSAGE = "CHAT_MESSAGE",
  APPROVAL_REQUEST = "APPROVAL_REQUEST",
  APPROVAL_APPROVED = "APPROVAL_APPROVED",
  ATTENDANCE = "ATTENDANCE",
}

export enum SignatureDtoType {
  SIGNATURE = "SIGNATURE",
  STAMP = "STAMP",
}

export enum SignatureType {
  SIGNATURE = "SIGNATURE",
  STAMP = "STAMP",
}

export enum UploadSignatureDtoType {
  SIGNATURE = "SIGNATURE",
  STAMP = "STAMP",
}

export enum CreateOvertimeRequestDtoResetPeriod {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

export enum UpdateOvertimeRequestDtoResetPeriod {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

export enum CreateLetterTypeDtoCategory {
  Value0 = 0,
}

export enum EmployeeSalaryMonth {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export enum UploadSalaryDtoMonth {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export enum DocumentSignDtoStatus {
  AWAITING_OTHERS = "AWAITING_OTHERS",
  ACTION_REQUIRED = "ACTION_REQUIRED",
  DONE = "DONE",
  CC = "CC",
}

export enum TogglePlaceholderDtoType {
  SIGNATURE = "SIGNATURE",
  INITIALS = "INITIALS",
  FULL_NAME = "FULL_NAME",
  DATE = "DATE",
  STAMP = "STAMP",
}

export enum SignPlaceholderDtoType {
  SIGNATURE = "SIGNATURE",
  INITIALS = "INITIALS",
  FULL_NAME = "FULL_NAME",
  DATE = "DATE",
  STAMP = "STAMP",
}

export enum PatchNonConsumableItemsRequestDtoStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export enum StatusStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum EmployeeDepartment5 {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum EmployeeDepartment5 {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum TypeType {
  EMPLOYEE_ATTENDANCE = "EMPLOYEE_ATTENDANCE",
  EMPLOYEE_EXPENSE = "EMPLOYEE_EXPENSE",
  EMPLOYEE_LEAVE = "EMPLOYEE_LEAVE",
  EMPLOYEE_LETTER = "EMPLOYEE_LETTER",
  EMPLOYEE_OVERTIME = "EMPLOYEE_OVERTIME",
  EMPLOYEE_OVERTIME_SUMMARY = "EMPLOYEE_OVERTIME_SUMMARY",
}

export enum GroupByGroupBy {
  STATUS = "STATUS",
}

export enum EmployeeDepartment7 {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum EmployeeDepartment6 {
  EMPLOYEE_ATTENDANCE = "EMPLOYEE_ATTENDANCE",
  EMPLOYEE_EXPENSE = "EMPLOYEE_EXPENSE",
  EMPLOYEE_LEAVE = "EMPLOYEE_LEAVE",
  EMPLOYEE_LETTER = "EMPLOYEE_LETTER",
  EMPLOYEE_OVERTIME = "EMPLOYEE_OVERTIME",
  EMPLOYEE_OVERTIME_SUMMARY = "EMPLOYEE_OVERTIME_SUMMARY",
}

export enum EmployeeDepartment9 {
  STATUS = "STATUS",
}

export enum CreateFinanceCashoutItemRequestDtoOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum UpdateFinanceCashoutItemRequestDtoOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum UploadFinanceCashoutItemsReceiptRequestDtoOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum AttendanceControllerFindAllParamsStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum ApprovalControllerGetListParamsStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum ApprovalControllerGetListParamsType {
  EMPLOYEE_ATTENDANCE = "EMPLOYEE_ATTENDANCE",
  EMPLOYEE_EXPENSE = "EMPLOYEE_EXPENSE",
  EMPLOYEE_LEAVE = "EMPLOYEE_LEAVE",
  EMPLOYEE_LETTER = "EMPLOYEE_LETTER",
  EMPLOYEE_OVERTIME = "EMPLOYEE_OVERTIME",
  EMPLOYEE_OVERTIME_SUMMARY = "EMPLOYEE_OVERTIME_SUMMARY",
  FINANCE_CASH_OUT = "FINANCE_CASH_OUT",
}

export enum ApprovalControllerGetListParamsGroupBy {
  STATUS = "STATUS",
}

export enum ApprovalControllerGetCountParamsStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum ApprovalControllerGetCountParamsType {
  EMPLOYEE_ATTENDANCE = "EMPLOYEE_ATTENDANCE",
  EMPLOYEE_EXPENSE = "EMPLOYEE_EXPENSE",
  EMPLOYEE_LEAVE = "EMPLOYEE_LEAVE",
  EMPLOYEE_LETTER = "EMPLOYEE_LETTER",
  EMPLOYEE_OVERTIME = "EMPLOYEE_OVERTIME",
  EMPLOYEE_OVERTIME_SUMMARY = "EMPLOYEE_OVERTIME_SUMMARY",
  FINANCE_CASH_OUT = "FINANCE_CASH_OUT",
}

export enum ApprovalControllerGetCountParamsGroupBy {
  STATUS = "STATUS",
}

/** @default "and" */
export enum EmployeeControllerFindAllParamsOpr {
  And = "and",
  Or = "or",
}

export enum EmployeeLeaveControllerFindAllParamsStatus {
  True = true,
  False = false,
  Null = null,
}

export enum DocumentSignControllerGetListParamsReturn {
  COUNT = "COUNT",
}

export enum EmployeeTagControllerGetListParamsType {
  EMPLOYEE = "EMPLOYEE",
  TAG = "TAG",
}

export enum FinanceCashoutControllerGetAllFinanceCashoutItemsParamsOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum FinanceCashoutControllerGetOneFinanceCashoutItemParamsOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum FinanceCashoutControllerDeleteFinanceCashoutItemParamsOwnerType {
  EMPLOYEE = "EMPLOYEE",
  ORGANIZATION = "ORGANIZATION",
}

export enum ReturnReturn {
  COUNT = "COUNT",
}

export enum EmployeeDepartment10 {
  EMPLOYEE = "EMPLOYEE",
  TAG = "TAG",
}

export enum ReturnReturn {
  COUNT = "COUNT",
}

export enum EmployeeDepartment5 {
  EMPLOYEE = "EMPLOYEE",
  TAG = "TAG",
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title API Documentation for Antara Co App
 * @version 1.0
 * @contact
 *
 * Please report if there's issue
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  employee = {
    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerFindAll
     * @request GET:/employee/attendance
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerFindAll: (
      query?: {
        status?: AttendanceControllerFindAllParamsStatusEnum;
        employeeId?: number;
        getSubordinates?: boolean;
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerGetPerformance
     * @request GET:/employee/attendance/performance/{employee_id}
     * @secure
     * @response `200` `GetEmployeeAttendancePerformanceResponse`
     */
    attendanceControllerGetPerformance: (
      employeeId: number,
      query: {
        /** @format date-time */
        date: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetEmployeeAttendancePerformanceResponse, any>({
        path: `/employee/attendance/performance/${employeeId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerGetSummary
     * @request GET:/employee/attendance/summary
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerGetSummary: (
      query: {
        /** @format date-time */
        startDate: string;
        /** @format date-time */
        endDate: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/summary`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerFindOne
     * @request GET:/employee/attendance/{attendance_id}
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerFindOne: (
      attendanceId: number,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${attendanceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerRemove
     * @request DELETE:/employee/attendance/{attendance_id}
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerRemove: (
      attendanceId: number,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${attendanceId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerAddRecord
     * @request POST:/employee/attendance/{employee_id}/add
     * @secure
     * @response `200` `(object)[]`
     * @response `201` `EmployeeAttendance`
     */
    attendanceControllerAddRecord: (
      employeeId: number,
      data: AddAttendanceRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${employeeId}/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerCheckIn
     * @request POST:/employee/attendance/{employee_id}/checkin
     * @secure
     * @response `200` `(object)[]`
     * @response `201` `EmployeeAttendance`
     */
    attendanceControllerCheckIn: (
      employeeId: number,
      data: CreateEmployeeAttendanceDto,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${employeeId}/checkin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerCheckOut
     * @request PATCH:/employee/attendance/{employee_id}/checkout
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerCheckOut: (
      employeeId: number,
      data: UpdateEmployeeAttendanceDto,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${employeeId}/checkout`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerGetworkOverview
     * @request GET:/employee/attendance/{employee_id}/workOverview
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerGetworkOverview: (
      employeeId: number,
      query: {
        /** @format date-time */
        startDate: string;
        /** @format date-time */
        endDate: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/${employeeId}/workOverview`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Attendance
     * @name AttendanceControllerGetAttendanceReport
     * @request GET:/employee/attendance/report/generate
     * @secure
     * @response `200` `(object)[]`
     */
    attendanceControllerGetAttendanceReport: (
      query: {
        month: number;
        year: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/attendance/report/generate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerFindAll
     * @request GET:/employee/expense
     * @secure
     * @response `200` `void`
     */
    expenseControllerFindAll: (
      query?: {
        employeeId?: number;
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
        employeeNumber?: string;
        filterByTransactionDate?: boolean;
        filterBySubmitDate?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerCreate
     * @request POST:/employee/expense
     * @secure
     * @response `200` `void`
     * @response `201` `(EmployeeExpense)[]`
     */
    expenseControllerCreate: (
      data: CreateEmployeeExpenseRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerGetOne
     * @request GET:/employee/expense/{expense_id}
     * @secure
     * @response `200` `EmployeeExpense`
     */
    expenseControllerGetOne: (expenseId: number, params: RequestParams = {}) =>
      this.request<EmployeeExpense, any>({
        path: `/employee/expense/${expenseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerRemove
     * @request DELETE:/employee/expense/{expense_id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerRemove: (expenseId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/employee/expense/${expenseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerUpdateOne
     * @request PATCH:/employee/expense/{expense_id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerUpdateOne: (
      expenseId: number,
      data: UpdateEmployeeExpenseRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/${expenseId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerFindAllSummary
     * @request GET:/employee/expense/summary/all
     * @secure
     * @response `200` `void`
     */
    expenseControllerFindAllSummary: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
        expenseIds?: number[];
        employeeIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/summary/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerGetOneSummary
     * @request GET:/employee/expense/summary/{expense_summary_id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerGetOneSummary: (
      expenseSummaryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/summary/${expenseSummaryId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerRemoveSummary
     * @request DELETE:/employee/expense/summary/{expense_summary_id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerRemoveSummary: (
      expenseSummaryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/summary/${expenseSummaryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerPreview
     * @request POST:/employee/expense/preview-summary
     * @secure
     * @response `200` `void`
     * @response `201` `string`
     */
    expenseControllerPreview: (
      data: PreviewEmployeeExpenseSummaryRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/preview-summary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Expense
     * @name ExpenseControllerReport
     * @request POST:/employee/expense/summary
     * @secure
     * @response `200` `void`
     * @response `201` `EmployeeExpenseSummary`
     */
    expenseControllerReport: (
      data: CreateEmployeeExpenseSummaryRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/expense/summary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerFindAll
     * @request GET:/employee
     * @response `200` `(Employee)[]`
     */
    employeeControllerFindAll: (
      query?: {
        ids?: number[];
        email?: string;
        number?: string;
        name?: string;
        /** @default "and" */
        opr?: EmployeeControllerFindAllParamsOprEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<Employee[], any>({
        path: `/employee`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerCreate
     * @request POST:/employee
     * @response `201` `Employee`
     */
    employeeControllerCreate: (
      data: CreateEmployeeDto,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerFindOne
     * @request GET:/employee/{employee_id}
     * @response `200` `Employee`
     */
    employeeControllerFindOne: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee/${employeeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerUpdate
     * @request PATCH:/employee/{employee_id}
     * @response `200` `Employee`
     */
    employeeControllerUpdate: (
      employeeId: number,
      data: UpdateEmployeeDto,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee/${employeeId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerRemove
     * @request DELETE:/employee/{employee_id}
     * @response `200` `Employee`
     */
    employeeControllerRemove: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee/${employeeId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerFindByEmployeeNumber
     * @request GET:/employee/number/{employee_number}
     * @response `200` `Employee`
     */
    employeeControllerFindByEmployeeNumber: (
      employeeNumber: string,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee/number/${employeeNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerFindSubordinates
     * @request GET:/employee/{employee_id}/subordinates
     * @response `200` `(Employee)[]`
     */
    employeeControllerFindSubordinates: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<Employee[], any>({
        path: `/employee/${employeeId}/subordinates`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeControllerBulkCreate
     * @request POST:/employee/bulk
     * @response `201` `(Employee)[]`
     */
    employeeControllerBulkCreate: (
      data: BulkCreateEmployeeDto,
      params: RequestParams = {}
    ) =>
      this.request<Employee[], any>({
        path: `/employee/bulk`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindAll
     * @request GET:/employee/letter/all
     * @response `200` `(EmployeeLetter)[]`
     */
    employeeLetterControllerFindAll: (
      query?: {
        employeeId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter[], any>({
        path: `/employee/letter/all`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindOne
     * @request GET:/employee/letter/{letter_id}
     * @response `200` `EmployeeLetter`
     */
    employeeLetterControllerFindOne: (
      letterId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter, any>({
        path: `/employee/letter/${letterId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerRemove
     * @request DELETE:/employee/letter/{letter_id}
     * @response `200` `EmployeeLetter`
     */
    employeeLetterControllerRemove: (
      letterId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter, any>({
        path: `/employee/letter/${letterId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerCreate
     * @request POST:/employee/letter
     * @response `201` `EmployeeLetter`
     */
    employeeLetterControllerCreate: (
      data: EmployeeLetterDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter, any>({
        path: `/employee/letter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindAllByManagerId
     * @request GET:/employee/letter/manager/{manager_id}/all
     * @response `200` `(EmployeeLetter)[]`
     */
    employeeLetterControllerFindAllByManagerId: (
      managerId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter[], any>({
        path: `/employee/letter/manager/${managerId}/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindPendingByManagerId
     * @request GET:/employee/letter/manager/{manager_id}/pending
     * @response `200` `(EmployeeLetter)[]`
     */
    employeeLetterControllerFindPendingByManagerId: (
      managerId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter[], any>({
        path: `/employee/letter/manager/${managerId}/pending`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindApprovedByManagerId
     * @request GET:/employee/letter/manager/{manager_id}/approved
     * @response `200` `(EmployeeLetter)[]`
     */
    employeeLetterControllerFindApprovedByManagerId: (
      managerId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter[], any>({
        path: `/employee/letter/manager/${managerId}/approved`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerFindRejectedByManagerId
     * @request GET:/employee/letter/manager/{manager_id}/rejected
     * @response `200` `(EmployeeLetter)[]`
     */
    employeeLetterControllerFindRejectedByManagerId: (
      managerId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLetter[], any>({
        path: `/employee/letter/manager/${managerId}/rejected`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Letter
     * @name EmployeeLetterControllerGetLink
     * @request GET:/employee/letter/{letter_id}/link
     * @response `200` `string`
     */
    employeeLetterControllerGetLink: (
      letterId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/employee/letter/${letterId}/link`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Position
     * @name PositionControllerFindAll
     * @request GET:/employee/position/all
     * @response `200` `(object)[]`
     */
    positionControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/employee/position/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Position
     * @name PositionControllerFindOne
     * @request GET:/employee/position/{position_id}
     * @response `200` `(object)[]`
     */
    positionControllerFindOne: (
      positionId: number,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/position/${positionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Position
     * @name PositionControllerUpdate
     * @request PATCH:/employee/position/{position_id}
     * @response `200` `EmployeePosition`
     */
    positionControllerUpdate: (
      positionId: number,
      data: UpdatePositionRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeePosition, any>({
        path: `/employee/position/${positionId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Position
     * @name PositionControllerRemove
     * @request DELETE:/employee/position/{position_id}
     * @response `200` `void`
     */
    positionControllerRemove: (
      positionId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/position/${positionId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Position
     * @name PositionControllerCreate
     * @request POST:/employee/position
     * @response `201` `EmployeePosition`
     */
    positionControllerCreate: (
      data: CreatePositionRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeePosition, any>({
        path: `/employee/position`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Department
     * @name DepartmentControllerFindAll
     * @request GET:/employee/department/all
     * @response `200` `(EmployeeDepartment)[]`
     */
    departmentControllerFindAll: (params: RequestParams = {}) =>
      this.request<EmployeeDepartment[], any>({
        path: `/employee/department/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Department
     * @name DepartmentControllerFind
     * @request GET:/employee/department/{department_id}
     * @response `200` `EmployeeDepartment`
     */
    departmentControllerFind: (
      departmentId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeDepartment, any>({
        path: `/employee/department/${departmentId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Department
     * @name DepartmentControllerUpdate
     * @request PATCH:/employee/department/{department_id}
     * @response `200` `EmployeeDepartment`
     */
    departmentControllerUpdate: (
      departmentId: number,
      data: UpdateEmployeeDepartmentDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeDepartment, any>({
        path: `/employee/department/${departmentId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Department
     * @name DepartmentControllerRemove
     * @request DELETE:/employee/department/{department_id}
     * @response `200` `EmployeeDepartment`
     */
    departmentControllerRemove: (
      departmentId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeDepartment, any>({
        path: `/employee/department/${departmentId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Department
     * @name DepartmentControllerCreate
     * @request POST:/employee/department
     * @response `201` `EmployeeDepartment`
     */
    departmentControllerCreate: (
      data: CreateEmployeeDepartmentDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeDepartment, any>({
        path: `/employee/department`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Contact Information
     * @name ContactInformationControllerGetAll
     * @request GET:/employee/contact-information
     * @secure
     * @response `200` `void`
     */
    contactInformationControllerGetAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/employee/contact-information`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Contact Information
     * @name ContactInformationControllerCreateOne
     * @request POST:/employee/contact-information
     * @secure
     * @response `200` `void`
     * @response `201` `ContactInformation`
     */
    contactInformationControllerCreateOne: (
      data: CreateContactInformationRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/contact-information`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Contact Information
     * @name ContactInformationControllerGetOne
     * @request GET:/employee/contact-information/{contact_information_id}
     * @secure
     * @response `200` `void`
     */
    contactInformationControllerGetOne: (
      contactInformationId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/contact-information/${contactInformationId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Contact Information
     * @name ContactInformationControllerUpdateOne
     * @request PATCH:/employee/contact-information/{contact_information_id}
     * @secure
     * @response `200` `void`
     */
    contactInformationControllerUpdateOne: (
      contactInformationId: number,
      data: CreateContactInformationRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/contact-information/${contactInformationId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Contact Information
     * @name ContactInformationControllerDeleteOne
     * @request DELETE:/employee/contact-information/{contact_information_id}
     * @secure
     * @response `200` `void`
     */
    contactInformationControllerDeleteOne: (
      contactInformationId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/contact-information/${contactInformationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerFindAll
     * @request GET:/employee/leave/all
     * @secure
     * @response `200` `(object)[]`
     */
    employeeLeaveControllerFindAll: (
      query?: {
        employeeId?: number;
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
        status?: EmployeeLeaveControllerFindAllParamsStatusEnum[];
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/employee/leave/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerGetSummary
     * @request GET:/employee/leave/summary
     * @secure
     * @response `200` `LeaveSummaryResponseDto`
     */
    employeeLeaveControllerGetSummary: (params: RequestParams = {}) =>
      this.request<LeaveSummaryResponseDto, any>({
        path: `/employee/leave/summary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerFindOne
     * @request GET:/employee/leave/{leave_id}
     * @secure
     * @response `200` `EmployeeLeave`
     */
    employeeLeaveControllerFindOne: (
      leaveId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeave, any>({
        path: `/employee/leave/${leaveId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerRemove
     * @request DELETE:/employee/leave/{leave_id}
     * @secure
     * @response `200` `EmployeeLeave`
     */
    employeeLeaveControllerRemove: (
      leaveId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeave, any>({
        path: `/employee/leave/${leaveId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerRequestLeave
     * @request POST:/employee/leave
     * @secure
     * @response `201` `EmployeeLeave`
     */
    employeeLeaveControllerRequestLeave: (
      data: RequestEmployeeLeaveDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeave, any>({
        path: `/employee/leave`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Leave
     * @name EmployeeLeaveControllerPreviewDocument
     * @request POST:/employee/leave/preview
     * @secure
     * @response `201` `string`
     */
    employeeLeaveControllerPreviewDocument: (
      data: RequestEmployeeLeaveDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/employee/leave/preview`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerGetList
     * @request GET:/employee/overtime/all
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerGetList: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
        employeeIds?: number[];
        employeeNumber?: string;
        overtimeIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerGetOne
     * @request GET:/employee/overtime/{overtime_id}
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerGetOne: (
      overtimeId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/${overtimeId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerRemove
     * @request DELETE:/employee/overtime/{overtime_id}
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerRemove: (
      overtimeId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/${overtimeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerReport
     * @request POST:/employee/overtime
     * @secure
     * @response `201` `void`
     */
    employeeOvertimeControllerReport: (
      data: ReportEmployeeOvertimeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerPreviewDocument
     * @request POST:/employee/overtime/preview
     * @secure
     * @response `201` `void`
     */
    employeeOvertimeControllerPreviewDocument: (
      data: ReportEmployeeOvertimeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/preview`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerGetSummary
     * @request GET:/employee/overtime/summary/all
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerGetSummary: (
      query?: {
        employeeId?: number;
        employeeNumber?: string;
        overtimeSummaryId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/summary/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerGetOneSummary
     * @request GET:/employee/overtime/summary/{summary_id}
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerGetOneSummary: (
      summaryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/summary/${summaryId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerRemoveSummary
     * @request DELETE:/employee/overtime/summary/{summary_id}
     * @secure
     * @response `200` `void`
     */
    employeeOvertimeControllerRemoveSummary: (
      summaryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/summary/${summaryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerCreateSummary
     * @request POST:/employee/overtime/summary
     * @secure
     * @response `200` `void`
     * @response `201` `EmployeeOvertimeSummary`
     */
    employeeOvertimeControllerCreateSummary: (
      data: GetOvertimeSummaryRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/summary`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Overtime
     * @name EmployeeOvertimeControllerPreviewSummaryDocument
     * @request POST:/employee/overtime/summary/preview
     * @secure
     * @response `200` `void`
     * @response `201` `string`
     */
    employeeOvertimeControllerPreviewSummaryDocument: (
      data: GetOvertimeSummaryRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/overtime/summary/preview`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Avatar
     * @name AvatarControllerUploadAvatar
     * @request POST:/employee/avatar/{employeeId}
     * @secure
     * @response `201` `Employee`
     */
    avatarControllerUploadAvatar: (
      employeeId: number,
      data: UploadEmployeePhotoDto,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/employee/avatar/${employeeId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Avatar
     * @name AvatarControllerGetAvatar
     * @request GET:/employee/avatar/{employeeId}
     * @secure
     * @response `200` `string`
     */
    avatarControllerGetAvatar: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/employee/avatar/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Adjustment
     * @name LeaveAdjustmentControllerGetList
     * @request GET:/employee/leave/adjustment/list
     * @secure
     * @response `200` `(EmployeeLeaveAdjustment)[]`
     */
    leaveAdjustmentControllerGetList: (
      data: GetEmployeeLeaveAdjustmentRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeaveAdjustment[], any>({
        path: `/employee/leave/adjustment/list`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Adjustment
     * @name LeaveAdjustmentControllerGetOne
     * @request GET:/employee/leave/adjustment/{id}
     * @secure
     * @response `200` `EmployeeLeaveAdjustment`
     */
    leaveAdjustmentControllerGetOne: (id: number, params: RequestParams = {}) =>
      this.request<EmployeeLeaveAdjustment, any>({
        path: `/employee/leave/adjustment/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Adjustment
     * @name LeaveAdjustmentControllerCreateMany
     * @request POST:/employee/leave/adjustment
     * @secure
     * @response `201` `(EmployeeLeaveAdjustment)[]`
     */
    leaveAdjustmentControllerCreateMany: (
      data: CreateEmployeeLeaveAdjustmentRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeaveAdjustment[], any>({
        path: `/employee/leave/adjustment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Adjustment
     * @name LeaveAdjustmentControllerUpdateMany
     * @request PATCH:/employee/leave/adjustment
     * @secure
     * @response `200` `(EmployeeLeaveAdjustment)[]`
     */
    leaveAdjustmentControllerUpdateMany: (
      data: UpdateEmployeeLeaveAdjustmentRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeLeaveAdjustment[], any>({
        path: `/employee/leave/adjustment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Adjustment
     * @name LeaveAdjustmentControllerDeleteOne
     * @request DELETE:/employee/leave/adjustment/;id
     * @secure
     * @response `200` `void`
     */
    leaveAdjustmentControllerDeleteOne: (
      id: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/leave/adjustment/;id`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tax
     * @name TaxControllerUploadTaxStatement
     * @request POST:/employee/tax/upload
     * @response `201` `EmployeeTax`
     */
    taxControllerUploadTaxStatement: (
      data: UploadTaxStatementDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTax, any>({
        path: `/employee/tax/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tax
     * @name TaxControllerFind
     * @request GET:/employee/tax/all
     * @response `200` `(EmployeeTax)[]`
     */
    taxControllerFind: (
      query?: {
        employeeId?: number;
        employeeNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTax[], any>({
        path: `/employee/tax/all`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tax
     * @name TaxControllerFindOne
     * @request GET:/employee/tax/{taxId}
     * @response `200` `EmployeeTax`
     */
    taxControllerFindOne: (taxId: number, params: RequestParams = {}) =>
      this.request<EmployeeTax, any>({
        path: `/employee/tax/${taxId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tax
     * @name TaxControllerGetLink
     * @request GET:/employee/tax/{taxId}/link
     * @response `200` `string`
     */
    taxControllerGetLink: (taxId: number, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/employee/tax/${taxId}/link`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Salary
     * @name EmployeeSalaryControllerFind
     * @request GET:/employee/salary/all
     * @secure
     * @response `200` `(EmployeeSalary)[]`
     */
    employeeSalaryControllerFind: (
      query?: {
        employeeId?: number;
        employeeNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeSalary[], any>({
        path: `/employee/salary/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Salary
     * @name EmployeeSalaryControllerFindOne
     * @request GET:/employee/salary/{salaryStatementId}
     * @secure
     * @response `200` `EmployeeSalary`
     */
    employeeSalaryControllerFindOne: (
      salaryStatementId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeSalary, any>({
        path: `/employee/salary/${salaryStatementId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Salary
     * @name EmployeeSalaryControllerRemove
     * @request DELETE:/employee/salary/{salaryStatementId}
     * @secure
     * @response `200` `void`
     */
    employeeSalaryControllerRemove: (
      salaryStatementId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/salary/${salaryStatementId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Salary
     * @name EmployeeSalaryControllerUpload
     * @request POST:/employee/salary/upload
     * @secure
     * @response `201` `EmployeeSalary`
     */
    employeeSalaryControllerUpload: (
      data: UploadSalaryDto,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeSalary, any>({
        path: `/employee/salary/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Salary
     * @name EmployeeSalaryControllerFindLink
     * @request GET:/employee/salary/{salaryStatementId}/link
     * @secure
     * @response `200` `string`
     */
    employeeSalaryControllerFindLink: (
      salaryStatementId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/employee/salary/${salaryStatementId}/link`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tag
     * @name EmployeeTagControllerGetList
     * @request GET:/employee/tag/all
     * @secure
     * @response `200` `(EmployeeTagResponseDto)[]`
     */
    employeeTagControllerGetList: (
      query?: {
        id?: number;
        type?: EmployeeTagControllerGetListParamsTypeEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTagResponseDto[], any>({
        path: `/employee/tag/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee Tag
     * @name EmployeeTagControllerUpdate
     * @request POST:/employee/tag
     * @secure
     * @response `201` `void`
     */
    employeeTagControllerUpdate: (
      data: UpdateEmployeeTagRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/employee/tag`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  approval = {
    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerGetAllRejected
     * @request GET:/approval/get-all-expired
     * @secure
     * @response `200` `(object)[]`
     */
    approvalControllerGetAllRejected: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/approval/get-all-expired`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerTestReject
     * @request GET:/approval/test-reject
     * @secure
     * @response `200` `void`
     */
    approvalControllerTestReject: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/approval/test-reject`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerGetList
     * @request GET:/approval
     * @secure
     * @response `200` `ApprovalListDto`
     */
    approvalControllerGetList: (
      query?: {
        status?: ApprovalControllerGetListParamsStatusEnum[];
        type?: ApprovalControllerGetListParamsTypeEnum[];
        groupBy?: ApprovalControllerGetListParamsGroupByEnum;
        manager?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalListDto, any>({
        path: `/approval`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerGetCount
     * @request GET:/approval/count
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    approvalControllerGetCount: (
      query?: {
        status?: ApprovalControllerGetCountParamsStatusEnum[];
        type?: ApprovalControllerGetCountParamsTypeEnum[];
        groupBy?: ApprovalControllerGetCountParamsGroupByEnum;
        manager?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/approval/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerGetDetailed
     * @request GET:/approval/{approvalId}
     * @secure
     * @response `200` `(object)[]`
     */
    approvalControllerGetDetailed: (
      approvalId: number,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/approval/${approvalId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerRemove
     * @request DELETE:/approval/{approvalId}
     * @secure
     * @response `200` `void`
     */
    approvalControllerRemove: (
      approvalId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/approval/${approvalId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerApprove
     * @request PATCH:/approval/{approvalId}
     * @secure
     * @response `200` `(object)[]`
     */
    approvalControllerApprove: (
      approvalId: number,
      data: ApproveApprovalDto,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/approval/${approvalId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerGetDocument
     * @request GET:/approval/{approvalId}/document
     * @secure
     * @response `200` `string`
     */
    approvalControllerGetDocument: (
      approvalId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/approval/${approvalId}/document`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approval
     * @name ApprovalControllerClickDocument
     * @request POST:/approval/{approvalId}/click
     * @secure
     * @response `201` `Approval`
     */
    approvalControllerClickDocument: (
      approvalId: number,
      data: ClickApprovalDocumentDto,
      params: RequestParams = {}
    ) =>
      this.request<Approval, any>({
        path: `/approval/${approvalId}/click`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  financeCashout = {
    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetAllFinanceCashouts
     * @request GET:/finance-cashout
     * @secure
     * @response `200` `(FinanceCashout)[]`
     */
    financeCashoutControllerGetAllFinanceCashouts: (
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout[], any>({
        path: `/finance-cashout`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerCreateFinanceCashout
     * @request POST:/finance-cashout
     * @secure
     * @response `201` `FinanceCashout`
     */
    financeCashoutControllerCreateFinanceCashout: (
      data: CreateFinanceCashoutRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetOneFinanceCashout
     * @request GET:/finance-cashout/{finance_cashout_id}
     * @secure
     * @response `200` `FinanceCashout`
     */
    financeCashoutControllerGetOneFinanceCashout: (
      financeCashoutId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/${financeCashoutId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerUpdateFinanceCashout
     * @request PATCH:/finance-cashout/{finance_cashout_id}
     * @secure
     * @response `200` `FinanceCashout`
     */
    financeCashoutControllerUpdateFinanceCashout: (
      financeCashoutId: number,
      data: UpdateFinanceCashoutRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/${financeCashoutId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerDeleteFinanceCashout
     * @request DELETE:/finance-cashout/{finance_cashout_id}
     * @secure
     * @response `200` `FinanceCashout`
     */
    financeCashoutControllerDeleteFinanceCashout: (
      financeCashoutId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/${financeCashoutId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGenerateFinanceCashoutReport
     * @request POST:/finance-cashout/generate-report/{finance_cashout_id}
     * @secure
     * @response `201` `FinanceCashout`
     */
    financeCashoutControllerGenerateFinanceCashoutReport: (
      financeCashoutId: number,
      generateDocument: boolean,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/generate-report/${financeCashoutId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerRecreateFinanceCashout
     * @request POST:/finance-cashout/recreate/{finance_cashout_id}
     * @secure
     * @response `201` `FinanceCashout`
     */
    financeCashoutControllerRecreateFinanceCashout: (
      financeCashoutId: number,
      query?: {
        /** @format date-time */
        expenseStartDate?: string;
        /** @format date-time */
        expenseEndDate?: string;
        /** @format date-time */
        cutOffDate?: string;
        updateEmployeeExpenses?: boolean;
        updateTax?: boolean;
        updateBilling?: boolean;
        updateEmployeeSalary?: boolean;
        updateBPJS?: boolean;
        updatePrivateInsurance?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/recreate/${financeCashoutId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerPreviewFinanceCashout
     * @request POST:/finance-cashout/preview/{finance_cashout_id}
     * @secure
     * @response `201` `string`
     */
    financeCashoutControllerPreviewFinanceCashout: (
      financeCashoutId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/finance-cashout/preview/${financeCashoutId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerRefreshFinanceCashoutItems
     * @request POST:/finance-cashout/refresh-items/{finance_cashout_id}
     * @secure
     * @response `201` `FinanceCashout`
     */
    financeCashoutControllerRefreshFinanceCashoutItems: (
      financeCashoutId: number,
      query?: {
        updateEmployeeExpenses?: boolean;
        updateTax?: boolean;
        updateBilling?: boolean;
        updateEmployeeSalary?: boolean;
        updateBPJS?: boolean;
        updatePrivateInsurance?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashout, any>({
        path: `/finance-cashout/refresh-items/${financeCashoutId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetAllFinanceCashoutItems
     * @request GET:/finance-cashout/items/all
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    financeCashoutControllerGetAllFinanceCashoutItems: (
      query: {
        ownerType: FinanceCashoutControllerGetAllFinanceCashoutItemsParamsOwnerTypeEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetOneFinanceCashoutItem
     * @request GET:/finance-cashout/items/{finance_cashout_item_id}
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    financeCashoutControllerGetOneFinanceCashoutItem: (
      financeCashoutItemId: number,
      query: {
        ownerType: FinanceCashoutControllerGetOneFinanceCashoutItemParamsOwnerTypeEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items/${financeCashoutItemId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerUpdateFinanceCashoutItem
     * @request PATCH:/finance-cashout/items/{finance_cashout_item_id}
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    financeCashoutControllerUpdateFinanceCashoutItem: (
      financeCashoutItemId: number,
      data: UpdateFinanceCashoutItemRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items/${financeCashoutItemId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerDeleteFinanceCashoutItem
     * @request DELETE:/finance-cashout/items/{finance_cashout_item_id}
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    financeCashoutControllerDeleteFinanceCashoutItem: (
      financeCashoutItemId: number,
      query: {
        ownerType: FinanceCashoutControllerDeleteFinanceCashoutItemParamsOwnerTypeEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items/${financeCashoutItemId}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerCreateFinanceCashoutItem
     * @request POST:/finance-cashout/items
     * @secure
     * @response `201` `ApprovalCountDto`
     */
    financeCashoutControllerCreateFinanceCashoutItem: (
      data: CreateFinanceCashoutItemRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerUploadFinanceCashoutItemsReceipt
     * @request POST:/finance-cashout/items/{finance_cashout_item_id}/receipt
     * @secure
     * @response `201` `ApprovalCountDto`
     */
    financeCashoutControllerUploadFinanceCashoutItemsReceipt: (
      financeCashoutItemId: string,
      data: UploadFinanceCashoutItemsReceiptRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/finance-cashout/items/${financeCashoutItemId}/receipt`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetAllFinanceCashoutItemTypes
     * @request GET:/finance-cashout/item-type/all
     * @secure
     * @response `200` `(FinanceCashoutItemType)[]`
     */
    financeCashoutControllerGetAllFinanceCashoutItemTypes: (
      query?: {
        ids?: number;
        name?: string;
        isRecurring?: boolean;
        financeCashoutId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashoutItemType[], any>({
        path: `/finance-cashout/item-type/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerGetOneFinanceCashoutItemType
     * @request GET:/finance-cashout/item-type/{finance_cashout_item_type_id}
     * @secure
     * @response `200` `FinanceCashoutItemType`
     */
    financeCashoutControllerGetOneFinanceCashoutItemType: (
      financeCashoutItemTypeId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashoutItemType, any>({
        path: `/finance-cashout/item-type/${financeCashoutItemTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerUpdateFinanceCashoutItemType
     * @request PATCH:/finance-cashout/item-type/{finance_cashout_item_type_id}
     * @secure
     * @response `200` `FinanceCashoutItemType`
     */
    financeCashoutControllerUpdateFinanceCashoutItemType: (
      financeCashoutItemTypeId: number,
      data: UpdateFinanceCashoutItemTypeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashoutItemType, any>({
        path: `/finance-cashout/item-type/${financeCashoutItemTypeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerDeleteFinanceCashoutItemType
     * @request DELETE:/finance-cashout/item-type/{finance_cashout_item_type_id}
     * @secure
     * @response `200` `FinanceCashoutItemType`
     */
    financeCashoutControllerDeleteFinanceCashoutItemType: (
      financeCashoutItemTypeId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashoutItemType, any>({
        path: `/finance-cashout/item-type/${financeCashoutItemTypeId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Cashout
     * @name FinanceCashoutControllerCreateFinanceCashoutItemType
     * @request POST:/finance-cashout/item-type
     * @secure
     * @response `201` `FinanceCashoutItemType`
     */
    financeCashoutControllerCreateFinanceCashoutItemType: (
      data: CreateFinanceCashoutItemTypeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCashoutItemType, any>({
        path: `/finance-cashout/item-type`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  financeTransactions = {
    /**
     * No description
     *
     * @tags Finance Transactions
     * @name FinanceTransactionControllerGetAllFinanceTransactions
     * @request GET:/finance-transactions/all
     * @secure
     * @response `200` `(FinanceTransaction)[]`
     */
    financeTransactionControllerGetAllFinanceTransactions: (
      params: RequestParams = {}
    ) =>
      this.request<FinanceTransaction[], any>({
        path: `/finance-transactions/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Transactions
     * @name FinanceTransactionControllerGetOneFinanceTransaction
     * @request GET:/finance-transactions/{finance_transaction_id}
     * @secure
     * @response `200` `FinanceTransaction`
     */
    financeTransactionControllerGetOneFinanceTransaction: (
      financeTransactionId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTransaction, any>({
        path: `/finance-transactions/${financeTransactionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Transactions
     * @name FinanceTransactionControllerUpdateFinanceTransaction
     * @request PATCH:/finance-transactions/{finance_transaction_id}
     * @secure
     * @response `200` `FinanceTransaction`
     */
    financeTransactionControllerUpdateFinanceTransaction: (
      financeTransactionId: number,
      data: CreateFinanceTransactionRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTransaction, any>({
        path: `/finance-transactions/${financeTransactionId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Transactions
     * @name FinanceTransactionControllerDeleteFinanceTransaction
     * @request DELETE:/finance-transactions/{finance_transaction_id}
     * @secure
     * @response `200` `FinanceTransaction`
     */
    financeTransactionControllerDeleteFinanceTransaction: (
      financeTransactionId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTransaction, any>({
        path: `/finance-transactions/${financeTransactionId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Transactions
     * @name FinanceTransactionControllerCreateFinanceTransaction
     * @request POST:/finance-transactions
     * @secure
     * @response `201` `FinanceTransaction`
     */
    financeTransactionControllerCreateFinanceTransaction: (
      data: CreateFinanceTransactionRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTransaction, any>({
        path: `/finance-transactions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  financeCurrency = {
    /**
     * No description
     *
     * @tags Finance Currency
     * @name FinanceCurrencyControllerGetListFinanceCurrency
     * @request GET:/finance-currency/all
     * @secure
     * @response `200` `(FinanceCurrency)[]`
     */
    financeCurrencyControllerGetListFinanceCurrency: (
      params: RequestParams = {}
    ) =>
      this.request<FinanceCurrency[], any>({
        path: `/finance-currency/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Currency
     * @name FinanceCurrencyControllerGetOneFinanceCurrency
     * @request GET:/finance-currency/{finance_currency_id}
     * @secure
     * @response `200` `FinanceCurrency`
     */
    financeCurrencyControllerGetOneFinanceCurrency: (
      financeCurrencyId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCurrency, any>({
        path: `/finance-currency/${financeCurrencyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Currency
     * @name FinanceCurrencyControllerUpdateFinanceCurrency
     * @request PATCH:/finance-currency/{finance_currency_id}
     * @secure
     * @response `200` `FinanceCurrency`
     */
    financeCurrencyControllerUpdateFinanceCurrency: (
      financeCurrencyId: number,
      data: CreateFinanceCurrencyRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCurrency, any>({
        path: `/finance-currency/${financeCurrencyId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Currency
     * @name FinanceCurrencyControllerDeleteFinanceCurrency
     * @request DELETE:/finance-currency/{finance_currency_id}
     * @secure
     * @response `200` `FinanceCurrency`
     */
    financeCurrencyControllerDeleteFinanceCurrency: (
      financeCurrencyId: number,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCurrency, any>({
        path: `/finance-currency/${financeCurrencyId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Currency
     * @name FinanceCurrencyControllerCreateFinanceCurrency
     * @request POST:/finance-currency
     * @secure
     * @response `201` `FinanceCurrency`
     */
    financeCurrencyControllerCreateFinanceCurrency: (
      data: CreateFinanceCurrencyRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceCurrency, any>({
        path: `/finance-currency`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerCreate
     * @request POST:/users
     * @response `201` `User`
     */
    userControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerFindAll
     * @request GET:/users
     * @response `200` `(User)[]`
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerFindOne
     * @request GET:/users/{user_id}
     * @response `200` `User`
     */
    userControllerFindOne: (userId: number, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerTest
     * @request GET:/users/notif-test
     * @secure
     * @response `200` `void`
     */
    userControllerTest: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/notif-test`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerFindOneByEmail
     * @request GET:/users/{email}
     * @response `200` `User`
     */
    userControllerFindOneByEmail: (email: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/${email}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdate
     * @request PUT:/users/{id}
     * @response `200` `void`
     */
    userControllerUpdate: (
      id: number,
      data: User,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerRemove
     * @request DELETE:/users/{id}
     * @response `200` `void`
     */
    userControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @tags File
     * @name FileControllerFind
     * @request GET:/file
     * @response `200` `(File)[]`
     */
    fileControllerFind: (params: RequestParams = {}) =>
      this.request<File[], any>({
        path: `/file`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileControllerRemove
     * @request DELETE:/file
     * @response `200` `void`
     */
    fileControllerRemove: (fileId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/file`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileControllerFindOne
     * @request GET:/file/{fileId}
     * @response `200` `File`
     */
    fileControllerFindOne: (fileId: number, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/${fileId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileControllerUpload
     * @request POST:/file/upload
     * @response `201` `File`
     */
    fileControllerUpload: (data: UploadFileDto, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileControllerUploadPdf
     * @request POST:/file/upload/pdf
     * @response `201` `File`
     */
    fileControllerUploadPdf: (
      data: UploadFileDto,
      params: RequestParams = {}
    ) =>
      this.request<File, any>({
        path: `/file/upload/pdf`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileControllerUploadPng
     * @request POST:/file/upload/png
     * @response `201` `File`
     */
    fileControllerUploadPng: (
      data: UploadFileDto,
      params: RequestParams = {}
    ) =>
      this.request<File, any>({
        path: `/file/upload/png`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  salary = {
    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerFindAllBaseSalary
     * @request GET:/salary/base
     * @secure
     * @response `200` `(EmployeeSalaryBase)[]`
     */
    salaryControllerFindAllBaseSalary: (params: RequestParams = {}) =>
      this.request<EmployeeSalaryBase[], any>({
        path: `/salary/base`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerCreateOrUpdateBaseSalary
     * @request POST:/salary/base
     * @secure
     * @response `201` `boolean`
     */
    salaryControllerCreateOrUpdateBaseSalary: (
      data: CreateSalaryBaseDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/base`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerFindBaseSalaryByEmployeeId
     * @request GET:/salary/{employee_id}/base
     * @secure
     * @response `200` `EmployeeSalaryBase`
     */
    salaryControllerFindBaseSalaryByEmployeeId: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<EmployeeSalaryBase, any>({
        path: `/salary/${employeeId}/base`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerFindBenefitsByEmployeeId
     * @request GET:/salary/{employee_id}/summary
     * @secure
     * @response `200` `SalaryBenefitsAndDeductionResponseDto`
     */
    salaryControllerFindBenefitsByEmployeeId: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<SalaryBenefitsAndDeductionResponseDto, any>({
        path: `/salary/${employeeId}/summary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerUpdateBenefit
     * @request PATCH:/salary/benefits/{benefits_id}
     * @secure
     * @response `200` `boolean`
     */
    salaryControllerUpdateBenefit: (
      benefitsId: number,
      data: CreateSalaryBenefitsDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/benefits/${benefitsId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerRemoveBenefit
     * @request DELETE:/salary/benefits/{benefits_id}
     * @secure
     * @response `200` `boolean`
     */
    salaryControllerRemoveBenefit: (
      benefitsId: number,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/benefits/${benefitsId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerCreateOrUpdateSalaryBenefits
     * @request POST:/salary/benefits
     * @secure
     * @response `201` `boolean`
     */
    salaryControllerCreateOrUpdateSalaryBenefits: (
      data: CreateSalaryBenefitsDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/benefits`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerUpdateDeduction
     * @request PATCH:/salary/deductions/{deductions_id}
     * @secure
     * @response `200` `boolean`
     */
    salaryControllerUpdateDeduction: (
      deductionsId: number,
      data: CreateSalaryDeductionDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/deductions/${deductionsId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerRemoveprivateInsurance
     * @request DELETE:/salary/deductions/{deductions_id}
     * @secure
     * @response `200` `boolean`
     */
    salaryControllerRemoveprivateInsurance: (
      deductionsId: number,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/deductions/${deductionsId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerCreateOrUpdateSalaryDeduction
     * @request POST:/salary/deductions
     * @secure
     * @response `201` `boolean`
     */
    salaryControllerCreateOrUpdateSalaryDeduction: (
      data: CreateSalaryDeductionDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/deductions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerCreateOrUpdatePrivateInsurance
     * @request POST:/salary/insurance
     * @secure
     * @response `201` `boolean`
     */
    salaryControllerCreateOrUpdatePrivateInsurance: (
      data: CreatePrivateInsuranceDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/salary/insurance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerFindInsurances
     * @request GET:/salary/insurance
     * @secure
     * @response `200` `(PrivateInsurance)[]`
     */
    salaryControllerFindInsurances: (params: RequestParams = {}) =>
      this.request<PrivateInsurance[], any>({
        path: `/salary/insurance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerTriggerSalaryCalculation
     * @request POST:/salary/{employee_id}/calculation
     * @secure
     * @response `201` `SalaryCalculation`
     */
    salaryControllerTriggerSalaryCalculation: (
      employeeId: number,
      data: CreateSalaryCalculationDto,
      params: RequestParams = {}
    ) =>
      this.request<SalaryCalculation, any>({
        path: `/salary/${employeeId}/calculation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salary
     * @name SalaryControllerGetSalaryCalculationSummary
     * @request GET:/salary/calculations
     * @secure
     * @response `200` `SalaryCalculationCashoutItems`
     */
    salaryControllerGetSalaryCalculationSummary: (
      query: {
        month: number;
        year: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalaryCalculationCashoutItems, any>({
        path: `/salary/calculations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  accessLevelScopes = {
    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerAssignScope
     * @request POST:/access-level-scopes/assign
     * @secure
     * @response `201` `(AccessLevelScope)[]`
     */
    scopeControllerAssignScope: (
      data: AssignScopeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<AccessLevelScope[], any>({
        path: `/access-level-scopes/assign`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerGetAvailableScope
     * @request GET:/access-level-scopes/available-scope
     * @secure
     * @response `200` `(AccessLevelScope)[]`
     */
    scopeControllerGetAvailableScope: (params: RequestParams = {}) =>
      this.request<AccessLevelScope[], any>({
        path: `/access-level-scopes/available-scope`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerFindAll
     * @request GET:/access-level-scopes/list
     * @secure
     * @response `200` `(AccessLevelScope)[]`
     */
    scopeControllerFindAll: (params: RequestParams = {}) =>
      this.request<AccessLevelScope[], any>({
        path: `/access-level-scopes/list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerFindById
     * @request GET:/access-level-scopes/{id}
     * @secure
     * @response `200` `AccessLevelScope`
     */
    scopeControllerFindById: (id: number, params: RequestParams = {}) =>
      this.request<AccessLevelScope, any>({
        path: `/access-level-scopes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerUpdate
     * @request PUT:/access-level-scopes/{id}
     * @secure
     * @response `200` `AccessLevelScope`
     */
    scopeControllerUpdate: (
      id: number,
      data: AccessLevelScope,
      params: RequestParams = {}
    ) =>
      this.request<AccessLevelScope, any>({
        path: `/access-level-scopes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Scope
     * @name ScopeControllerDelete
     * @request DELETE:/access-level-scopes/{id}
     * @secure
     * @response `200` `void`
     * @response `204` `void`
     */
    scopeControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/access-level-scopes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  accessLevel = {
    /**
     * No description
     *
     * @tags Access Level
     * @name AccessLevelControllerGetList
     * @request GET:/access-level
     * @secure
     * @response `200` `(AccessLevel)[]`
     */
    accessLevelControllerGetList: (params: RequestParams = {}) =>
      this.request<AccessLevel[], any>({
        path: `/access-level`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Level
     * @name AccessLevelControllerCreateNew
     * @request POST:/access-level
     * @secure
     * @response `201` `AccessLevel`
     */
    accessLevelControllerCreateNew: (
      data: CreateAccessLevelRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<AccessLevel, any>({
        path: `/access-level`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Level
     * @name AccessLevelControllerGetOne
     * @request GET:/access-level/{access_level_id}
     * @secure
     * @response `200` `AccessLevel`
     */
    accessLevelControllerGetOne: (
      accessLevelId: number,
      params: RequestParams = {}
    ) =>
      this.request<AccessLevel, any>({
        path: `/access-level/${accessLevelId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Level
     * @name AccessLevelControllerUpdateExisting
     * @request PATCH:/access-level/{access_level_id}
     * @secure
     * @response `200` `AccessLevel`
     */
    accessLevelControllerUpdateExisting: (
      accessLevelId: number,
      data: UpdateAccessLevelRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<AccessLevel, any>({
        path: `/access-level/${accessLevelId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Level
     * @name AccessLevelControllerDeleteOne
     * @request DELETE:/access-level/{access_level_id}
     * @secure
     * @response `200` `void`
     */
    accessLevelControllerDeleteOne: (
      accessLevelId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/access-level/${accessLevelId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  financeTax = {
    /**
     * No description
     *
     * @tags Finance Tax
     * @name FinanceTaxControllerFindAll
     * @request GET:/finance-tax
     * @secure
     * @response `200` `(FinanceTax)[]`
     */
    financeTaxControllerFindAll: (params: RequestParams = {}) =>
      this.request<FinanceTax[], any>({
        path: `/finance-tax`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax
     * @name FinanceTaxControllerCreate
     * @request POST:/finance-tax
     * @secure
     * @response `201` `FinanceTax`
     */
    financeTaxControllerCreate: (
      data: CreateFinanceTaxDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTax, any>({
        path: `/finance-tax`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax
     * @name FinanceTaxControllerFindOne
     * @request GET:/finance-tax/{id}
     * @secure
     * @response `200` `FinanceTax`
     */
    financeTaxControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<FinanceTax, any>({
        path: `/finance-tax/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax
     * @name FinanceTaxControllerUpdate
     * @request PATCH:/finance-tax/{id}
     * @secure
     * @response `200` `FinanceTax`
     */
    financeTaxControllerUpdate: (
      id: number,
      data: UpdateFinanceTaxDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTax, any>({
        path: `/finance-tax/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax
     * @name FinanceTaxControllerRemove
     * @request DELETE:/finance-tax/{id}
     * @secure
     * @response `200` `void`
     */
    financeTaxControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/finance-tax/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  financeTaxType = {
    /**
     * No description
     *
     * @tags Finance Tax Type
     * @name FinanceTaxTypeControllerFindAll
     * @request GET:/finance-tax-type
     * @secure
     * @response `200` `(FinanceTaxType)[]`
     */
    financeTaxTypeControllerFindAll: (
      query: {
        ids: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<FinanceTaxType[], any>({
        path: `/finance-tax-type`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax Type
     * @name FinanceTaxTypeControllerCreate
     * @request POST:/finance-tax-type
     * @secure
     * @response `201` `FinanceTaxType`
     */
    financeTaxTypeControllerCreate: (
      data: CreateFinanceTaxTypeDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTaxType, any>({
        path: `/finance-tax-type`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax Type
     * @name FinanceTaxTypeControllerFindOne
     * @request GET:/finance-tax-type/{id}
     * @secure
     * @response `200` `FinanceTaxType`
     */
    financeTaxTypeControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<FinanceTaxType, any>({
        path: `/finance-tax-type/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax Type
     * @name FinanceTaxTypeControllerUpdate
     * @request PATCH:/finance-tax-type/{id}
     * @secure
     * @response `200` `FinanceTaxType`
     */
    financeTaxTypeControllerUpdate: (
      id: number,
      data: UpdateFinanceTaxTypeDto,
      params: RequestParams = {}
    ) =>
      this.request<FinanceTaxType, any>({
        path: `/finance-tax-type/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Finance Tax Type
     * @name FinanceTaxTypeControllerRemove
     * @request DELETE:/finance-tax-type/{id}
     * @secure
     * @response `200` `void`
     */
    financeTaxTypeControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/finance-tax-type/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  client = {
    /**
     * No description
     *
     * @tags Client Org
     * @name ClientOrgControllerCreate
     * @request POST:/client/org
     * @secure
     * @response `201` `ClientOrg`
     */
    clientOrgControllerCreate: (
      data: CreateClientOrgDto,
      params: RequestParams = {}
    ) =>
      this.request<ClientOrg, any>({
        path: `/client/org`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Org
     * @name ClientOrgControllerFindAll
     * @request GET:/client/org
     * @secure
     * @response `200` `(ClientOrg)[]`
     */
    clientOrgControllerFindAll: (
      query?: {
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClientOrg[], any>({
        path: `/client/org`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Org
     * @name ClientOrgControllerFindOne
     * @request GET:/client/org/{id}
     * @secure
     * @response `200` `ClientOrg`
     */
    clientOrgControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ClientOrg, any>({
        path: `/client/org/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Org
     * @name ClientOrgControllerUpdate
     * @request PATCH:/client/org/{id}
     * @secure
     * @response `200` `ClientOrg`
     */
    clientOrgControllerUpdate: (
      id: string,
      data: UpdateClientOrgDto,
      params: RequestParams = {}
    ) =>
      this.request<ClientOrg, any>({
        path: `/client/org/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Org
     * @name ClientOrgControllerRemove
     * @request DELETE:/client/org/{id}
     * @secure
     * @response `200` `void`
     */
    clientOrgControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/client/org/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientControllerCreate
     * @request POST:/client
     * @secure
     * @response `201` `Client`
     */
    clientControllerCreate: (
      data: CreateClientDto,
      params: RequestParams = {}
    ) =>
      this.request<Client, any>({
        path: `/client`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientControllerFindAll
     * @request GET:/client
     * @secure
     * @response `200` `(Client)[]`
     */
    clientControllerFindAll: (
      query?: {
        ids?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<Client[], any>({
        path: `/client`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientControllerFindOne
     * @request GET:/client/{id}
     * @secure
     * @response `200` `Client`
     */
    clientControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Client, any>({
        path: `/client/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientControllerUpdate
     * @request PATCH:/client/{id}
     * @secure
     * @response `200` `Client`
     */
    clientControllerUpdate: (
      id: string,
      data: UpdateClientDto,
      params: RequestParams = {}
    ) =>
      this.request<Client, any>({
        path: `/client/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientControllerRemove
     * @request DELETE:/client/{id}
     * @secure
     * @response `200` `void`
     */
    clientControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/client/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ProjectControllerCreate
     * @request POST:/client/project
     * @secure
     * @response `201` `Project`
     */
    projectControllerCreate: (
      data: CreateProjectDto,
      params: RequestParams = {}
    ) =>
      this.request<Project, any>({
        path: `/client/project`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ProjectControllerFindAll
     * @request GET:/client/project
     * @secure
     * @response `200` `(Project)[]`
     */
    projectControllerFindAll: (
      query?: {
        name?: string;
        ids?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<Project[], any>({
        path: `/client/project`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ProjectControllerFindOne
     * @request GET:/client/project/{id}
     * @secure
     * @response `200` `Project`
     */
    projectControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Project, any>({
        path: `/client/project/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ProjectControllerUpdate
     * @request PATCH:/client/project/{id}
     * @secure
     * @response `200` `Project`
     */
    projectControllerUpdate: (
      id: string,
      data: UpdateProjectDto,
      params: RequestParams = {}
    ) =>
      this.request<Project, any>({
        path: `/client/project/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ProjectControllerRemove
     * @request DELETE:/client/project/{id}
     * @secure
     * @response `200` `void`
     */
    projectControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/client/project/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ClientProjectControllerFindAll
     * @request GET:/client/client-project
     * @secure
     * @response `200` `(ClientProject)[]`
     */
    clientProjectControllerFindAll: (params: RequestParams = {}) =>
      this.request<ClientProject[], any>({
        path: `/client/client-project`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ClientProjectControllerUpdate
     * @request POST:/client/client-project
     * @secure
     * @response `201` `(ClientProject)[]`
     */
    clientProjectControllerUpdate: (
      data: UpdateClientProjectDto,
      params: RequestParams = {}
    ) =>
      this.request<ClientProject[], any>({
        path: `/client/client-project`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Project
     * @name ClientProjectControllerFindOne
     * @request GET:/client/client-project/{id}
     * @secure
     * @response `200` `ClientProject`
     */
    clientProjectControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ClientProject, any>({
        path: `/client/client-project/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  notification = {
    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerGetList
     * @request GET:/notification
     * @secure
     * @response `200` `(Notification)[]`
     */
    notificationControllerGetList: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
        limit?: number;
        isRead?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<Notification[], any>({
        path: `/notification`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerCreateNotification
     * @request POST:/notification
     * @secure
     * @response `201` `Notification`
     */
    notificationControllerCreateNotification: (
      employeeId: number,
      data: CreateNotificationRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<Notification, any>({
        path: `/notification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerDeleteNotification
     * @request DELETE:/notification
     * @secure
     * @response `200` `void`
     */
    notificationControllerDeleteNotification: (
      query?: {
        notificationIds?: number[];
        userIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/notification`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerGetDetailed
     * @request GET:/notification/{notificationId}
     * @secure
     * @response `200` `(object)[]`
     */
    notificationControllerGetDetailed: (
      notificationId: number,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/notification/${notificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerSendNotification
     * @request POST:/notification/send
     * @secure
     * @response `201` `string`
     */
    notificationControllerSendNotification: (
      data: SendNotificationRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/notification/send`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerSendAndroidNotification
     * @request POST:/notification/send/android
     * @secure
     * @response `201` `string`
     */
    notificationControllerSendAndroidNotification: (
      data: SendNotificationRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/notification/send/android`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerGetListV2
     * @request GET:/notification/v2/get/all
     * @secure
     * @response `200` `(object)[]`
     */
    notificationControllerGetListV2: (
      query?: {
        page?: number;
        pageSize?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/notification/v2/get/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerDeleteAllV2
     * @request DELETE:/notification/v2/delete/all
     * @secure
     * @response `200` `void`
     */
    notificationControllerDeleteAllV2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/notification/v2/delete/all`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationControllerDeleteAllByTopicAndUserId
     * @request DELETE:/notification/v2/delete/clockin-test/{userId}
     * @secure
     * @response `200` `void`
     */
    notificationControllerDeleteAllByTopicAndUserId: (
      userId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/notification/v2/delete/clockin-test/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification Token
     * @name UserTokenControllerGetList
     * @request GET:/notification/token/list
     * @response `200` `(UserToken)[]`
     */
    userTokenControllerGetList: (
      query?: {
        employeeId?: number;
        userId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserToken[], any>({
        path: `/notification/token/list`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification Token
     * @name UserTokenControllerGetDetailed
     * @request GET:/notification/token/{userTokenId}
     * @response `200` `UserToken`
     */
    userTokenControllerGetDetailed: (
      userTokenId: number,
      params: RequestParams = {}
    ) =>
      this.request<UserToken, any>({
        path: `/notification/token/${userTokenId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification Token
     * @name UserTokenControllerRegisterToken
     * @request POST:/notification/token/{employeeId}
     * @response `201` `UserToken`
     */
    userTokenControllerRegisterToken: (
      employeeId: number,
      data: RegisterTokenRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<UserToken, any>({
        path: `/notification/token/${employeeId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  mail = {
    /**
     * No description
     *
     * @tags Mail
     * @name MailControllerSendEmail
     * @request POST:/mail/send
     * @response `201` `void`
     */
    mailControllerSendEmail: (data: SendEmailDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mail/send`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mail
     * @name MailControllerSendTestEmail
     * @request GET:/mail/test/{email}
     * @response `200` `void`
     */
    mailControllerSendTestEmail: (email: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mail/test/${email}`,
        method: "GET",
        ...params,
      }),
  };
  signature = {
    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerGetList
     * @request GET:/signature
     * @secure
     * @response `200` `(SignatureDto)[]`
     */
    signatureControllerGetList: (params: RequestParams = {}) =>
      this.request<SignatureDto[], any>({
        path: `/signature`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerUpload
     * @request POST:/signature
     * @secure
     * @response `201` `SignatureDto`
     */
    signatureControllerUpload: (
      data: UploadSignatureDto,
      params: RequestParams = {}
    ) =>
      this.request<SignatureDto, any>({
        path: `/signature`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerGetDetailed
     * @request GET:/signature/{signatureId}
     * @secure
     * @response `200` `Signature`
     */
    signatureControllerGetDetailed: (
      signatureId: number,
      params: RequestParams = {}
    ) =>
      this.request<Signature, any>({
        path: `/signature/${signatureId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerUpdateSignature
     * @request PATCH:/signature/{signatureId}
     * @secure
     * @response `200` `Signature`
     */
    signatureControllerUpdateSignature: (
      signatureId: number,
      data: UploadSignatureDto,
      params: RequestParams = {}
    ) =>
      this.request<Signature, any>({
        path: `/signature/${signatureId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerRemove
     * @request DELETE:/signature/{signatureId}
     * @secure
     * @response `200` `void`
     */
    signatureControllerRemove: (
      signatureId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/signature/${signatureId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature
     * @name SignatureControllerGetEmployees
     * @request GET:/signature/{signatureId}/employees
     * @secure
     * @response `200` `(SignatureEmployeeDto)[]`
     */
    signatureControllerGetEmployees: (
      signatureId: number,
      params: RequestParams = {}
    ) =>
      this.request<SignatureEmployeeDto[], any>({
        path: `/signature/${signatureId}/employees`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  expense = {
    /**
     * No description
     *
     * @tags Expense
     * @name ExpenseControllerGetList
     * @request GET:/expense/list
     * @secure
     * @response `200` `void`
     */
    expenseControllerGetList: (
      query?: {
        ids?: number[];
        employeeIds?: number[];
        positionIds?: number[];
        tagIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/expense/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expense
     * @name ExpenseControllerGetOne
     * @request GET:/expense/{id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerGetOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/expense/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expense
     * @name ExpenseControllerUpdateOne
     * @request PATCH:/expense/{id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerUpdateOne: (
      id: number,
      data: UpdateExpenseRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/expense/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expense
     * @name ExpenseControllerDeleteOne
     * @request DELETE:/expense/{id}
     * @secure
     * @response `200` `void`
     */
    expenseControllerDeleteOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/expense/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expense
     * @name ExpenseControllerCreateOne
     * @request POST:/expense
     * @secure
     * @response `200` `void`
     * @response `201` `Expense`
     */
    expenseControllerCreateOne: (
      data: CreateExpenseRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/expense`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tag = {
    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerGetList
     * @request GET:/tag
     * @secure
     * @response `200` `(TagResponseDto)[]`
     */
    tagControllerGetList: (
      query?: {
        name?: string;
        tagIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<TagResponseDto[], any>({
        path: `/tag`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerCreate
     * @request POST:/tag
     * @secure
     * @response `201` `Tag`
     */
    tagControllerCreate: (
      data: CreateTagRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<Tag, any>({
        path: `/tag`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerDelete
     * @request DELETE:/tag
     * @secure
     * @response `200` `void`
     */
    tagControllerDelete: (tagId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tag`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerGetAllList
     * @request GET:/tag/list
     * @secure
     * @response `200` `(TagResponseDto)[]`
     */
    tagControllerGetAllList: (
      query?: {
        name?: string;
        tagIds?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<TagResponseDto[], any>({
        path: `/tag/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerGetDetailed
     * @request GET:/tag/{tag_id}
     * @secure
     * @response `200` `TagResponseDto`
     */
    tagControllerGetDetailed: (tagId: number, params: RequestParams = {}) =>
      this.request<TagResponseDto, any>({
        path: `/tag/${tagId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name TagControllerUpdate
     * @request PATCH:/tag/{tag_id}
     * @secure
     * @response `200` `Tag`
     */
    tagControllerUpdate: (
      tagId: number,
      data: CreateTagRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<Tag, any>({
        path: `/tag/${tagId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  overtime = {
    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerGetList
     * @request GET:/overtime/list
     * @secure
     * @response `200` `void`
     */
    overtimeControllerGetList: (
      query?: {
        ids?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/overtime/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerGetApplicable
     * @request GET:/overtime/applicable
     * @secure
     * @response `200` `void`
     */
    overtimeControllerGetApplicable: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/overtime/applicable`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerGetOne
     * @request GET:/overtime/{id}
     * @secure
     * @response `200` `void`
     */
    overtimeControllerGetOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/overtime/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerUpdateOne
     * @request PATCH:/overtime/{id}
     * @secure
     * @response `200` `void`
     */
    overtimeControllerUpdateOne: (
      id: number,
      data: UpdateOvertimeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/overtime/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerDeleteOne
     * @request DELETE:/overtime/{id}
     * @secure
     * @response `200` `void`
     */
    overtimeControllerDeleteOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/overtime/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Overtime
     * @name OvertimeControllerCreateOne
     * @request POST:/overtime
     * @secure
     * @response `200` `void`
     * @response `201` `Overtime`
     */
    overtimeControllerCreateOne: (
      data: CreateOvertimeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/overtime`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  leave = {
    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerGetList
     * @request GET:/leave/list
     * @secure
     * @response `200` `void`
     */
    leaveControllerGetList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/leave/list`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerGetAvailable
     * @request GET:/leave/available
     * @secure
     * @response `200` `void`
     */
    leaveControllerGetAvailable: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/leave/available`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerGetOne
     * @request GET:/leave/{id}
     * @secure
     * @response `200` `void`
     */
    leaveControllerGetOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/leave/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerUpdateOne
     * @request PATCH:/leave/{id}
     * @secure
     * @response `200` `void`
     */
    leaveControllerUpdateOne: (
      id: number,
      data: UpdateLeaveTypeDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/leave/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerDeleteOne
     * @request DELETE:/leave/{id}
     * @secure
     * @response `200` `void`
     */
    leaveControllerDeleteOne: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/leave/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leave Type
     * @name LeaveControllerCreateOne
     * @request POST:/leave
     * @secure
     * @response `200` `void`
     * @response `201` `LeaveType`
     */
    leaveControllerCreateOne: (
      data: CreateLeaveTypeRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/leave`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  bankAccount = {
    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetAllBankAccounts
     * @request GET:/bank-account/all
     * @secure
     * @response `200` `(BankAccount)[]`
     */
    bankAccountControllerGetAllBankAccounts: (params: RequestParams = {}) =>
      this.request<BankAccount[], any>({
        path: `/bank-account/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetOneBankAccount
     * @request GET:/bank-account/{bank_account_id}
     * @secure
     * @response `200` `BankAccount`
     */
    bankAccountControllerGetOneBankAccount: (
      bankAccountId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccount, any>({
        path: `/bank-account/${bankAccountId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerUpdateBankAccount
     * @request PATCH:/bank-account/{bank_account_id}
     * @secure
     * @response `200` `BankAccount`
     */
    bankAccountControllerUpdateBankAccount: (
      bankAccountId: number,
      data: CreateBankAccountRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccount, any>({
        path: `/bank-account/${bankAccountId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerDeleteBankAccount
     * @request DELETE:/bank-account/{bank_account_id}
     * @secure
     * @response `200` `BankAccount`
     */
    bankAccountControllerDeleteBankAccount: (
      bankAccountId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccount, any>({
        path: `/bank-account/${bankAccountId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerCreateBankAccount
     * @request POST:/bank-account
     * @secure
     * @response `201` `BankAccount`
     */
    bankAccountControllerCreateBankAccount: (
      data: CreateBankAccountRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccount, any>({
        path: `/bank-account`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetAllBankAccountTypes
     * @request GET:/bank-account/type/all
     * @secure
     * @response `200` `(BankAccountType)[]`
     */
    bankAccountControllerGetAllBankAccountTypes: (params: RequestParams = {}) =>
      this.request<BankAccountType[], any>({
        path: `/bank-account/type/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetOneBankAccountType
     * @request GET:/bank-account/type/{bank_account_type_name_id}
     * @secure
     * @response `200` `BankAccountType`
     */
    bankAccountControllerGetOneBankAccountType: (
      bankAccountTypeNameId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountType, any>({
        path: `/bank-account/type/${bankAccountTypeNameId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerUpdateBankAccountType
     * @request PATCH:/bank-account/type/{bank_account_type_name_id}
     * @secure
     * @response `200` `BankAccountName`
     */
    bankAccountControllerUpdateBankAccountType: (
      bankAccountTypeNameId: number,
      data: CreateBankAccountNameRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/type/${bankAccountTypeNameId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerDeleteBankAccountType
     * @request DELETE:/bank-account/type/{bank_account_type_name_id}
     * @secure
     * @response `200` `BankAccountName`
     */
    bankAccountControllerDeleteBankAccountType: (
      bankAccountTypeNameId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/type/${bankAccountTypeNameId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerCreateBankAccountType
     * @request POST:/bank-account/type
     * @secure
     * @response `201` `BankAccountName`
     */
    bankAccountControllerCreateBankAccountType: (
      data: CreateBankAccountNameRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/type`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetAllBankAccountNames
     * @request GET:/bank-account/name/all
     * @secure
     * @response `200` `(BankAccountName)[]`
     */
    bankAccountControllerGetAllBankAccountNames: (params: RequestParams = {}) =>
      this.request<BankAccountName[], any>({
        path: `/bank-account/name/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerGetOneBankAccountName
     * @request GET:/bank-account/name/{bank_account_name_id}
     * @secure
     * @response `200` `BankAccountName`
     */
    bankAccountControllerGetOneBankAccountName: (
      bankAccountNameId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/name/${bankAccountNameId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerUpdateBankAccountName
     * @request PATCH:/bank-account/name/{bank_account_name_id}
     * @secure
     * @response `200` `BankAccountName`
     */
    bankAccountControllerUpdateBankAccountName: (
      bankAccountNameId: number,
      data: CreateBankAccountNameRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/name/${bankAccountNameId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerDeleteBankAccountName
     * @request DELETE:/bank-account/name/{bank_account_name_id}
     * @secure
     * @response `200` `BankAccountName`
     */
    bankAccountControllerDeleteBankAccountName: (
      bankAccountNameId: number,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/name/${bankAccountNameId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank Account
     * @name BankAccountControllerCreateBankAccountName
     * @request POST:/bank-account/name
     * @secure
     * @response `201` `BankAccountName`
     */
    bankAccountControllerCreateBankAccountName: (
      data: CreateBankAccountNameRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<BankAccountName, any>({
        path: `/bank-account/name`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  billing = {
    /**
     * No description
     *
     * @tags Billing
     * @name BillingControllerGetAllBillings
     * @request GET:/billing
     * @secure
     * @response `200` `(Billing)[]`
     */
    billingControllerGetAllBillings: (
      query?: {
        name?: string;
        /** @format date-time */
        billingStartDate?: string;
        /** @format date-time */
        billingEndDate?: string;
        /** @format date-time */
        deadlineStarDate?: string;
        /** @format date-time */
        deadlineEndDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Billing[], any>({
        path: `/billing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name BillingControllerCreateBilling
     * @request POST:/billing
     * @secure
     * @response `201` `Billing`
     */
    billingControllerCreateBilling: (
      data: CreateBillingRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<Billing, any>({
        path: `/billing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name BillingControllerGetOneBilling
     * @request GET:/billing/{billing_id}
     * @secure
     * @response `200` `Billing`
     */
    billingControllerGetOneBilling: (
      billingId: number,
      params: RequestParams = {}
    ) =>
      this.request<Billing, any>({
        path: `/billing/${billingId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name BillingControllerUpdateBilling
     * @request PATCH:/billing/{billing_id}
     * @secure
     * @response `200` `Billing`
     */
    billingControllerUpdateBilling: (
      billingId: number,
      data: UpdateBillingRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<Billing, any>({
        path: `/billing/${billingId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Billing
     * @name BillingControllerDeleteBilling
     * @request DELETE:/billing/{billing_id}
     * @secure
     * @response `200` `Billing`
     */
    billingControllerDeleteBilling: (
      billingId: number,
      params: RequestParams = {}
    ) =>
      this.request<Billing, any>({
        path: `/billing/${billingId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  branch = {
    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerGetNearestBranch
     * @request GET:/branch/nearest
     * @secure
     * @response `200` `Branch`
     */
    branchControllerGetNearestBranch: (
      query: {
        latitude: number;
        longitude: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Branch, any>({
        path: `/branch/nearest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerGetList
     * @request GET:/branch
     * @secure
     * @response `200` `(Branch)[]`
     */
    branchControllerGetList: (params: RequestParams = {}) =>
      this.request<Branch[], any>({
        path: `/branch`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerCreate
     * @request POST:/branch
     * @secure
     * @response `201` `Branch`
     */
    branchControllerCreate: (
      data: CreateBranchDto,
      params: RequestParams = {}
    ) =>
      this.request<Branch, any>({
        path: `/branch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerGetDetailed
     * @request GET:/branch/{branchId}
     * @secure
     * @response `200` `Branch`
     */
    branchControllerGetDetailed: (
      branchId: number,
      params: RequestParams = {}
    ) =>
      this.request<Branch, any>({
        path: `/branch/${branchId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerUpdate
     * @request PATCH:/branch/{branchId}
     * @secure
     * @response `200` `Branch`
     */
    branchControllerUpdate: (
      branchId: number,
      data: UpdateBranchDto,
      params: RequestParams = {}
    ) =>
      this.request<Branch, any>({
        path: `/branch/${branchId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name BranchControllerRemove
     * @request DELETE:/branch/{branchId}
     * @secure
     * @response `200` `void`
     */
    branchControllerRemove: (branchId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/branch/${branchId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  company = {
    /**
     * No description
     *
     * @tags Company Profile
     * @name CompanyProfileControllerGetInfo
     * @request GET:/company/profile
     * @secure
     * @response `200` `CompanyProfileResponseDto`
     */
    companyProfileControllerGetInfo: (params: RequestParams = {}) =>
      this.request<CompanyProfileResponseDto, any>({
        path: `/company/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Company Profile
     * @name CompanyProfileControllerUpdateInfo
     * @request POST:/company/profile
     * @secure
     * @response `201` `CompanyProfileResponseDto`
     */
    companyProfileControllerUpdateInfo: (
      data: CompanyProfileUpdateRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<CompanyProfileResponseDto, any>({
        path: `/company/profile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  holiday = {
    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerCreate
     * @summary Create a new holiday or multiple holidays
     * @request POST:/holiday
     * @response `201` `void`
     */
    holidayControllerCreate: (
      data: CreateHolidayDto[],
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/holiday`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerFindAll
     * @summary Get all holidays
     * @request GET:/holiday
     * @response `200` `void`
     */
    holidayControllerFindAll: (
      query?: {
        /** @format date-time */
        start_date?: string;
        /** @format date-time */
        end_date?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/holiday`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerFindOneByDate
     * @summary Get a holiday by date
     * @request GET:/holiday/{date}
     * @response `200` `void`
     */
    holidayControllerFindOneByDate: (
      date: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/holiday/${date}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerFindOne
     * @summary Get a holiday by id
     * @request GET:/holiday/one/{holidayId}
     * @response `200` `void`
     */
    holidayControllerFindOne: (holidayId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/holiday/one/${holidayId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerUpdate
     * @summary Update a holiday by id
     * @request PATCH:/holiday/{id}
     * @response `200` `void`
     */
    holidayControllerUpdate: (
      id: string,
      data: UpdateHolidayDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/holiday/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerRemove
     * @summary Delete a holiday by id
     * @request DELETE:/holiday/{id}
     * @response `200` `void`
     */
    holidayControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/holiday/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Holiday
     * @name HolidayControllerIsHoliday
     * @summary Check if a date is a holiday
     * @request GET:/holiday/is-holiday/{date}
     * @response `200` `void`
     */
    holidayControllerIsHoliday: (date: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/holiday/is-holiday/${date}`,
        method: "GET",
        ...params,
      }),
  };
  letter = {
    /**
     * No description
     *
     * @tags Letter
     * @name LetterControllerFindAll
     * @request GET:/letter/all
     * @response `200` `(Letter)[]`
     */
    letterControllerFindAll: (params: RequestParams = {}) =>
      this.request<Letter[], any>({
        path: `/letter/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Letter
     * @name LetterControllerFindOne
     * @request GET:/letter/{letter_id}
     * @response `200` `Letter`
     */
    letterControllerFindOne: (letterId: number, params: RequestParams = {}) =>
      this.request<Letter, any>({
        path: `/letter/${letterId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Letter
     * @name LetterControllerRemove
     * @request DELETE:/letter/{letter_id}
     * @response `200` `Letter`
     */
    letterControllerRemove: (letterId: number, params: RequestParams = {}) =>
      this.request<Letter, any>({
        path: `/letter/${letterId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  type = {
    /**
     * No description
     *
     * @tags Letter Type
     * @name LetterTypeControllerFindAll
     * @request GET:/type/all
     * @response `200` `(LetterType)[]`
     */
    letterTypeControllerFindAll: (params: RequestParams = {}) =>
      this.request<LetterType[], any>({
        path: `/type/all`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Letter Type
     * @name LetterTypeControllerFindOne
     * @request GET:/type/{type_id}
     * @response `200` `LetterType`
     */
    letterTypeControllerFindOne: (typeId: number, params: RequestParams = {}) =>
      this.request<LetterType, any>({
        path: `/type/${typeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Letter Type
     * @name LetterTypeControllerRemove
     * @request DELETE:/type/{type_id}
     * @response `200` `LetterType`
     */
    letterTypeControllerRemove: (typeId: number, params: RequestParams = {}) =>
      this.request<LetterType, any>({
        path: `/type/${typeId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Letter Type
     * @name LetterTypeControllerCreate
     * @request POST:/type
     * @response `201` `LetterType`
     */
    letterTypeControllerCreate: (
      data: CreateLetterTypeDto,
      params: RequestParams = {}
    ) =>
      this.request<LetterType, any>({
        path: `/type`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  documentsign = {
    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerGetList
     * @request GET:/documentsign
     * @secure
     * @response `200` `ApprovalCountDto`
     */
    documentSignControllerGetList: (
      query?: {
        status?: string[];
        return?: DocumentSignControllerGetListParamsReturnEnum;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/documentsign`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerUpload
     * @request POST:/documentsign
     * @secure
     * @response `201` `DocumentSignDto`
     */
    documentSignControllerUpload: (
      data: UploadDocumentDto,
      params: RequestParams = {}
    ) =>
      this.request<DocumentSignDto, any>({
        path: `/documentsign`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerGetDetailed
     * @request GET:/documentsign/{documentSignId}
     * @secure
     * @response `200` `DocumentSignDto`
     */
    documentSignControllerGetDetailed: (
      documentSignId: number,
      params: RequestParams = {}
    ) =>
      this.request<DocumentSignDto, any>({
        path: `/documentsign/${documentSignId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerRemove
     * @request DELETE:/documentsign/{documentSignId}
     * @secure
     * @response `200` `void`
     */
    documentSignControllerRemove: (
      documentSignId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/documentsign/${documentSignId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerPublish
     * @request PATCH:/documentsign/{documentSignId}/publish
     * @secure
     * @response `200` `void`
     */
    documentSignControllerPublish: (
      documentSignId: number,
      data: PublishDocumentDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/documentsign/${documentSignId}/publish`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerUpdateDocumentSignName
     * @request PATCH:/documentsign/{documentSignId}/name
     * @secure
     * @response `200` `DocumentSign`
     */
    documentSignControllerUpdateDocumentSignName: (
      documentSignId: number,
      data: UpdateDocumentSignNameDto,
      params: RequestParams = {}
    ) =>
      this.request<DocumentSign, any>({
        path: `/documentsign/${documentSignId}/name`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerUpdateDocumentSignCc
     * @request PATCH:/documentsign/{documentSignId}/cc
     * @secure
     * @response `200` `void`
     */
    documentSignControllerUpdateDocumentSignCc: (
      documentSignId: number,
      data: UpdateDocumentSignCcDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/documentsign/${documentSignId}/cc`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignControllerSignDocument
     * @request GET:/documentsign/sign/{documentSignId}
     * @secure
     * @response `200` `string`
     */
    documentSignControllerSignDocument: (
      documentSignId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/documentsign/sign/${documentSignId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignPositionControllerTogglePlaceholder
     * @request PATCH:/documentsign/{documentSignId}/placement/{employeeId}
     * @secure
     * @response `200` `string`
     */
    documentSignPositionControllerTogglePlaceholder: (
      documentSignId: number,
      employeeId: number,
      data: TogglePlaceholderDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/documentsign/${documentSignId}/placement/${employeeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignPositionControllerSign
     * @request PATCH:/documentsign/{documentSignId}/sign
     * @secure
     * @response `200` `string`
     */
    documentSignPositionControllerSign: (
      documentSignId: number,
      data: SignPlaceholderDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/documentsign/${documentSignId}/sign`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentSign
     * @name DocumentSignPositionControllerRemovePlaceholdersByEmployeeId
     * @request PATCH:/documentsign/{documentSignId}/placement/{employeeId}/remove
     * @secure
     * @response `200` `string`
     */
    documentSignPositionControllerRemovePlaceholdersByEmployeeId: (
      documentSignId: number,
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/documentsign/${documentSignId}/placement/${employeeId}/remove`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  dashboard = {
    /**
     * No description
     *
     * @tags Dashboard
     * @name DashboardControllerCountForDashboard
     * @request GET:/dashboard/count
     * @response `200` `void`
     */
    dashboardControllerCountForDashboard: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/dashboard/count`,
        method: "GET",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerValidateGoogle
     * @request POST:/auth/google
     * @response `201` `JwtResponseDto`
     */
    authControllerValidateGoogle: (
      data: GoogleAuthDto,
      params: RequestParams = {}
    ) =>
      this.request<JwtResponseDto, any>({
        path: `/auth/google`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     * @response `201` `ApprovalCountDto`
     */
    authControllerLogin: (data: LocalAuthDto, params: RequestParams = {}) =>
      this.request<ApprovalCountDto, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerChangePassword
     * @request POST:/auth/password/change
     * @secure
     * @response `201` `void`
     */
    authControllerChangePassword: (
      data: ChangePasswordDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/auth/password/change`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  newsCrud = {
    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerCreate
     * @request POST:/news-crud
     * @response `201` `void`
     */
    newsCrudControllerCreate: (
      data: CreateNewsCrudDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerFindAll
     * @request GET:/news-crud
     * @response `200` `void`
     */
    newsCrudControllerFindAll: (
      query?: {
        page?: number;
        pageSize?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerFindOne
     * @request GET:/news-crud/{id}
     * @response `200` `void`
     */
    newsCrudControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/news-crud/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerUpdate
     * @request PATCH:/news-crud/{id}
     * @response `200` `News`
     */
    newsCrudControllerUpdate: (
      id: string,
      data: UpdateNewsCrudDto,
      params: RequestParams = {}
    ) =>
      this.request<News, any>({
        path: `/news-crud/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerRemove
     * @request DELETE:/news-crud/{id}
     * @response `200` `void`
     */
    newsCrudControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/news-crud/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerCreateComment
     * @request POST:/news-crud/{id}/comment
     * @response `201` `void`
     */
    newsCrudControllerCreateComment: (
      id: string,
      data: CreateCommentDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/comment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerFindAllComment
     * @request GET:/news-crud/{id}/comment
     * @response `200` `void`
     */
    newsCrudControllerFindAllComment: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/comment`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerFindOneComment
     * @request GET:/news-crud/{id}/comment/{commentId}
     * @response `200` `void`
     */
    newsCrudControllerFindOneComment: (
      id: number,
      commentId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/comment/${commentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerUpdateComment
     * @request PATCH:/news-crud/{id}/comment/{commentId}
     * @response `201` `void`
     */
    newsCrudControllerUpdateComment: (
      id: number,
      commentId: number,
      data: UpdateNewsCommentDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/comment/${commentId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerRemoveComment
     * @request DELETE:/news-crud/{id}/comment/{commentId}
     * @response `200` `void`
     */
    newsCrudControllerRemoveComment: (
      id: number,
      commentId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/comment/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerLikeNews
     * @request POST:/news-crud/{news_id}/like
     * @response `201` `void`
     */
    newsCrudControllerLikeNews: (
      newsId: number,
      data: CreateLikeDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${newsId}/like`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerFindAllLikeNews
     * @request GET:/news-crud/{news_id}/like
     * @response `200` `void`
     */
    newsCrudControllerFindAllLikeNews: (
      newsId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${newsId}/like`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerCountLikeNews
     * @request GET:/news-crud/{news_id}/like/count
     * @response `200` `number`
     */
    newsCrudControllerCountLikeNews: (
      newsId: number,
      params: RequestParams = {}
    ) =>
      this.request<number, any>({
        path: `/news-crud/${newsId}/like/count`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsCrudControllerRemoveLike
     * @request DELETE:/news-crud/{id}/like/{likeId}
     * @response `200` `void`
     */
    newsCrudControllerRemoveLike: (
      id: number,
      likeId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/news-crud/${id}/like/${likeId}`,
        method: "DELETE",
        ...params,
      }),
  };
  menu = {
    /**
     * No description
     *
     * @tags Menu
     * @name MenuControllerGetMenu
     * @request GET:/menu
     * @secure
     * @response `200` `(MenuItem)[]`
     */
    menuControllerGetMenu: (params: RequestParams = {}) =>
      this.request<MenuItem[], any>({
        path: `/menu`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name MenuControllerAddMenu
     * @request POST:/menu
     * @secure
     * @response `201` `(MenuItem)[]`
     */
    menuControllerAddMenu: (data: string[], params: RequestParams = {}) =>
      this.request<MenuItem[], any>({
        path: `/menu`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name MenuControllerGetUserMenu
     * @request GET:/menu/user/{user_id}
     * @secure
     * @response `200` `void`
     */
    menuControllerGetUserMenu: (userId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/menu/user/${userId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name MenuControllerCreateUserMenu
     * @request POST:/menu/user/{user_id}
     * @secure
     * @response `201` `(UserMenuItem)[]`
     */
    menuControllerCreateUserMenu: (
      userId: number,
      data: string[],
      params: RequestParams = {}
    ) =>
      this.request<UserMenuItem[], any>({
        path: `/menu/user/${userId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  inventory = {
    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetListConsumableItems
     * @request GET:/inventory/consumable-items
     * @secure
     * @response `200` `(ConsumableItems)[]`
     */
    inventoryControllerGetListConsumableItems: (params: RequestParams = {}) =>
      this.request<ConsumableItems[], any>({
        path: `/inventory/consumable-items`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerCreateConsumableItems
     * @request POST:/inventory/consumable-items
     * @secure
     * @response `201` `ConsumableItems`
     */
    inventoryControllerCreateConsumableItems: (
      data: PostConsumableItemsRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItems, any>({
        path: `/inventory/consumable-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetOneConsumableItems
     * @request GET:/inventory/consumable-items/{inventory_id}
     * @secure
     * @response `200` `ConsumableItems`
     */
    inventoryControllerGetOneConsumableItems: (
      inventoryId: number,
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItems, any>({
        path: `/inventory/consumable-items/${inventoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerRemoveConsumableItems
     * @request DELETE:/inventory/consumable-items/{inventory_id}
     * @secure
     * @response `200` `void`
     */
    inventoryControllerRemoveConsumableItems: (
      inventoryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/inventory/consumable-items/${inventoryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerUpdateConsumableItems
     * @request PATCH:/inventory/consumable-items/{inventory_id}
     * @secure
     * @response `200` `ConsumableItems`
     */
    inventoryControllerUpdateConsumableItems: (
      inventoryId: number,
      data: PatchConsumableItemsRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItems, any>({
        path: `/inventory/consumable-items/${inventoryId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetListConsumablePurchase
     * @request GET:/inventory/consumable-purchase
     * @secure
     * @response `200` `(ConsumableItemsPurchase)[]`
     */
    inventoryControllerGetListConsumablePurchase: (
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItemsPurchase[], any>({
        path: `/inventory/consumable-purchase`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerCreateConsumablePurchase
     * @request POST:/inventory/consumable-purchase
     * @secure
     * @response `201` `ConsumableItemsPurchase`
     */
    inventoryControllerCreateConsumablePurchase: (
      data: PostConsumableItemsPurchaseRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItemsPurchase, any>({
        path: `/inventory/consumable-purchase`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetOneConsumablePurchase
     * @request GET:/inventory/consumable-purchase/{purchase_id}
     * @secure
     * @response `200` `ConsumableItemsPurchase`
     */
    inventoryControllerGetOneConsumablePurchase: (
      purchaseId: number,
      params: RequestParams = {}
    ) =>
      this.request<ConsumableItemsPurchase, any>({
        path: `/inventory/consumable-purchase/${purchaseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerRemoveConsumablePurchase
     * @request DELETE:/inventory/consumable-purchase/{purchase_id}
     * @secure
     * @response `200` `void`
     */
    inventoryControllerRemoveConsumablePurchase: (
      purchaseId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/inventory/consumable-purchase/${purchaseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetListNonConsumableItems
     * @request GET:/inventory/nonconsumable-items
     * @secure
     * @response `200` `(NonConsumableItems)[]`
     */
    inventoryControllerGetListNonConsumableItems: (
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItems[], any>({
        path: `/inventory/nonconsumable-items`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerCreateNonConsumableItems
     * @request POST:/inventory/nonconsumable-items
     * @secure
     * @response `201` `NonConsumableItems`
     */
    inventoryControllerCreateNonConsumableItems: (
      data: PostNonConsumableItemsRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItems, any>({
        path: `/inventory/nonconsumable-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetOneNonConsumableItems
     * @request GET:/inventory/nonconsumable-items/{inventory_id}
     * @secure
     * @response `200` `NonConsumableItems`
     */
    inventoryControllerGetOneNonConsumableItems: (
      inventoryId: number,
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItems, any>({
        path: `/inventory/nonconsumable-items/${inventoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerRemoveNonConsumableItems
     * @request DELETE:/inventory/nonconsumable-items/{inventory_id}
     * @secure
     * @response `200` `void`
     */
    inventoryControllerRemoveNonConsumableItems: (
      inventoryId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/inventory/nonconsumable-items/${inventoryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerUpdateNonConsumableItems
     * @request PATCH:/inventory/nonconsumable-items/{inventory_id}
     * @secure
     * @response `200` `NonConsumableItems`
     */
    inventoryControllerUpdateNonConsumableItems: (
      inventoryId: number,
      data: PatchNonConsumableItemsRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItems, any>({
        path: `/inventory/nonconsumable-items/${inventoryId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetListNonConsumableTransfer
     * @request GET:/inventory/nonconsumable-transfer
     * @secure
     * @response `200` `(NonConsumableItemsTransfer)[]`
     */
    inventoryControllerGetListNonConsumableTransfer: (
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItemsTransfer[], any>({
        path: `/inventory/nonconsumable-transfer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerCreateNonConsumableTransfer
     * @request POST:/inventory/nonconsumable-transfer
     * @secure
     * @response `201` `NonConsumableItemsTransfer`
     */
    inventoryControllerCreateNonConsumableTransfer: (
      data: PostNonConsumableItemsTransferRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItemsTransfer, any>({
        path: `/inventory/nonconsumable-transfer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerGetOneNonConsumableTransfer
     * @request GET:/inventory/nonconsumable-transfer/{transfer_id}
     * @secure
     * @response `200` `NonConsumableItemsTransfer`
     */
    inventoryControllerGetOneNonConsumableTransfer: (
      transferId: number,
      params: RequestParams = {}
    ) =>
      this.request<NonConsumableItemsTransfer, any>({
        path: `/inventory/nonconsumable-transfer/${transferId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inventory
     * @name InventoryControllerRemoveNonConsumableTransfer
     * @request DELETE:/inventory/nonconsumable-transfer/{transfer_id}
     * @secure
     * @response `200` `void`
     */
    inventoryControllerRemoveNonConsumableTransfer: (
      transferId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/inventory/nonconsumable-transfer/${transferId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  chat = {
    /**
     * No description
     *
     * @tags Chat
     * @name ChatControllerFindByEmployeeNumber
     * @request GET:/chat/conversations/{employee_id}
     * @response `200` `(ChatMessageDto)[]`
     */
    chatControllerFindByEmployeeNumber: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<ChatMessageDto[], any>({
        path: `/chat/conversations/${employeeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  docuScan = {
    /**
     * No description
     *
     * @tags Document Scanner
     * @name DocuScanControllerUploadFile
     * @request POST:/docu-scan/upload
     * @response `201` `void`
     */
    docuScanControllerUploadFile: (
      data: DocuScanUpload,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/docu-scan/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document Scanner
     * @name DocuScanControllerLeaveOcrController
     * @request POST:/docu-scan/leave
     * @response `201` `ScannedLeaveDto`
     */
    docuScanControllerLeaveOcrController: (
      data: DocuScanUpload,
      params: RequestParams = {}
    ) =>
      this.request<ScannedLeaveDto, any>({
        path: `/docu-scan/leave`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document Scanner
     * @name DocuScanControllerOvertimeOcrController
     * @request POST:/docu-scan/overtime
     * @response `201` `ScannedOvertimeDto`
     */
    docuScanControllerOvertimeOcrController: (
      data: DocuScanUpload,
      params: RequestParams = {}
    ) =>
      this.request<ScannedOvertimeDto, any>({
        path: `/docu-scan/overtime`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document Scanner
     * @name DocuScanControllerExpenseOcrController
     * @request POST:/docu-scan/expense
     * @response `201` `ScannedExpenseDto`
     */
    docuScanControllerExpenseOcrController: (
      data: DocuScanUpload,
      params: RequestParams = {}
    ) =>
      this.request<ScannedExpenseDto, any>({
        path: `/docu-scan/expense`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  nanonetsWrapper = {
    /**
     * No description
     *
     * @tags Nanonets Wrapper
     * @name NanonetsWrapperControllerUpload
     * @request POST:/nanonets-wrapper/upload
     * @response `201` `ApprovalCountDto`
     */
    nanonetsWrapperControllerUpload: (
      data: NanonetsUploadDto,
      params: RequestParams = {}
    ) =>
      this.request<ApprovalCountDto, any>({
        path: `/nanonets-wrapper/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nanonets Wrapper
     * @name NanonetsWrapperControllerRawText
     * @request POST:/nanonets-wrapper/raw-text
     * @response `201` `RawTextNanonetsDto`
     */
    nanonetsWrapperControllerRawText: (
      data: NanonetsUploadDto,
      params: RequestParams = {}
    ) =>
      this.request<RawTextNanonetsDto, any>({
        path: `/nanonets-wrapper/raw-text`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  faceRecognition = {
    /**
     * No description
     *
     * @tags Face Recognition
     * @name FaceRecognitionControllerRegister
     * @request POST:/face-recognition/register/{employeeId}
     * @secure
     * @response `201` `Employee`
     */
    faceRecognitionControllerRegister: (
      employeeId: number,
      data: UploadFacePhotoDto,
      params: RequestParams = {}
    ) =>
      this.request<Employee, any>({
        path: `/face-recognition/register/${employeeId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Face Recognition
     * @name FaceRecognitionControllerVerify
     * @request POST:/face-recognition/verify/{employeeId}
     * @secure
     * @response `201` `FaceVerificationDto`
     */
    faceRecognitionControllerVerify: (
      employeeId: number,
      data: UploadFacePhotoDto,
      params: RequestParams = {}
    ) =>
      this.request<FaceVerificationDto, any>({
        path: `/face-recognition/verify/${employeeId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Face Recognition
     * @name FaceRecognitionControllerGetFaceId
     * @request GET:/face-recognition/{employeeId}
     * @secure
     * @response `200` `string`
     */
    faceRecognitionControllerGetFaceId: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/face-recognition/${employeeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Face Recognition
     * @name FaceRecognitionControllerDeleteFaceId
     * @request DELETE:/face-recognition/{employeeId}
     * @secure
     * @response `200` `void`
     */
    faceRecognitionControllerDeleteFaceId: (
      employeeId: number,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/face-recognition/${employeeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
