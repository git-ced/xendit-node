import Errors from './errors';
import { CardService } from './card';
import { VAService } from './va';
import { DisbursementService } from './disbursement';
import { InvoiceService } from './invoice';
import { PayoutService } from './payout';
import { RecurringPayment } from './recurring_payment';
import { Recurring } from './recurring';
import { XenditOptions } from './xendit_opts';
import { EWalletService } from './ewallet';
import { BalanceServices } from './balance';
import { RetailOutletService } from './retail_outlet';
import { RegionalRetailOutletService } from './regional_retail_outlet';
import { QrCode } from './qr_code';
import { PlatformService } from './platform';
import { CustomerService } from './customer';
import { DirectDebitService } from './direct_debit';
import { ReportService } from './report';
import { TransactionService } from './transaction';

declare class Xendit {
  constructor(opts: XenditOptions);
  static Errors: typeof Errors;
  Card: typeof CardService;
  VirtualAcc: typeof VAService;
  Disbursement: typeof DisbursementService;
  Invoice: typeof InvoiceService;
  Payout: typeof PayoutService;
  RecurringPayment: typeof RecurringPayment;
  Recurring: typeof Recurring;
  RecurringPlan: typeof RecurringPlan;
  EWallet: typeof EWalletService;
  Balance: typeof BalanceServices;
  RetailOutlet: typeof RetailOutletService;
  RegionalRetailOutlet: typeof RegionalRetailOutletService;
  QrCode: typeof QrCode;
  Platform: typeof PlatformService;
  Customer: typeof CustomerService;
  DirectDebit: typeof DirectDebitService;
  Report: typeof ReportService;
  Transaction: typeof TransactionService;
}
export = Xendit;
