<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case ApproveVendors = 'ApproveVendors';
    case SellProducts = 'SellProducts';
    case BuyProducts = 'BuyProducts';
    case BrowseProducts = 'BrowseProducts';
    case EditStorefront = 'EditStorefront';
    case ViewStorefront = 'ViewStorefront';
    case ManageEmployees = 'ManageEmployees';
    case ManageOrders = 'ManageOrders';
    case ViewOrders = 'ViewOrders';
    case HandleMessages = 'HandleMessages';
    case ViewMessages = 'ViewMessages';
    case SendMessages = 'SendMessages';
    case AccessAnalytics = 'AccessAnalytics';
    case ManageStorefront = 'ManageStorefront';
    case ManageServices = 'ManageServices';
    case ViewReviews = 'ViewReviews';
    case RespondReviews = 'RespondReviews';
    case UpgradeVisibility = 'UpgradeVisibility';
    case InviteEmployees = 'InviteEmployees';
    case ManagePayments = 'ManagePayments';
    case RequestPayouts = 'RequestPayouts';
    case ApproveBusinesses = 'ApproveBusinesses';
    case DenyBusinesses = 'DenyBusinesses';
    case SuspendBusinesses = 'SuspendBusinesses';
    case ManageCategories = 'ManageCategories';
    case ViewCategories = 'ViewCategories';
    case ViewAllTransactions = 'ViewAllTransactions';
    case ResolveDisputes = 'ResolveDisputes';
    case ModerateContent = 'ModerateContent';
    case ManageSubscriptions = 'ManageSubscriptions';
    case ViewSubscriptions = 'ViewSubscriptions';
    case EnableFeatureFlags = 'EnableFeatureFlags';
    case AuditPlatformActivity = 'AuditPlatformActivity';
    case ViewPlatformActivity = 'ViewPlatformActivity';
    case ViewPlatformTransactions = 'ViewPlatformTransactions';

    case OverseePayments = 'OverseePayments';
    case MonitorReviews = 'MonitorReviews';
    case ManageAdvertisements = 'ManageAdvertisements';
    case CreateBusiness = 'CreateBusiness';
    case BrowseListings = 'BrowseListings';
    case MessageBusinesses = 'MessageBusinesses';
    case TrackOrders = 'TrackOrders';
    case CancelOrders = 'CancelOrders';
    case RequestRefunds = 'RequestRefunds';
    case FavouriteBusinesses = 'FavouriteBusinesses';
    case RequestServices = 'RequestServices';
    case MakePayments = 'MakePayments';
    case LeaveReviews = 'LeaveReviews';
    case ReportIssues = 'ReportIssues';

}
