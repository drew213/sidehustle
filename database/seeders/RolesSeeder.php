<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $vendorRole = Role::create(['name' => RolesEnum::Vendor->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);

        $approveVendors = Permission::create(['name' => PermissionsEnum::ApproveVendors->value]);
        $sellProducts = Permission::create(['name' => PermissionsEnum::SellProducts->value]);
        $buyProducts = Permission::create(['name' => PermissionsEnum::BuyProducts->value]);;
        $browseProducts = Permission::create(['name' => PermissionsEnum::BrowseProducts->value]);
        $editStorefront = Permission::create(['name' => PermissionsEnum::EditStorefront->value]);
        $viewStorefront = Permission::create(['name' => PermissionsEnum::ViewStorefront->value]);
        $manageEmployees = Permission::create(['name' => PermissionsEnum::ManageEmployees->value]);
        $manageOrders = Permission::create(['name' => PermissionsEnum::ManageOrders->value]);
        $viewOrders = Permission::create(['name' => PermissionsEnum::ViewOrders->value]);
        $handleMessages = Permission::create(['name' => PermissionsEnum::HandleMessages->value]);
        $viewMessages = Permission::create(['name' => PermissionsEnum::ViewMessages->value]);
        $sendMessages = Permission::create(['name' => PermissionsEnum::SendMessages->value]);
        $accessAnalytics = Permission::create(['name' => PermissionsEnum::AccessAnalytics->value]);
        $manageStorefront = Permission::create(['name' => PermissionsEnum::ManageStorefront->value]);
        $manageServices = Permission::create(['name' => PermissionsEnum::ManageServices->value]);
        $viewReviews = Permission::create(['name' => PermissionsEnum::ViewReviews->value]);
        $respondReviews = Permission::create(['name' => PermissionsEnum::RespondReviews->value]);
        $upgradeVisibility = Permission::create(['name' => PermissionsEnum::UpgradeVisibility->value]);
        $inviteEmployees = Permission::create(['name' => PermissionsEnum::InviteEmployees->value]);
        $managePayments = Permission::create(['name' => PermissionsEnum::ManagePayments->value]);
        $requestPayouts = Permission::create(['name' => PermissionsEnum::RequestPayouts->value]);
        $approveBusinesses = Permission::create(['name' => PermissionsEnum::ApproveBusinesses->value]);
        $denyBusinesses = Permission::create(['name' => PermissionsEnum::DenyBusinesses->value]);
        $suspendBusinesses = Permission::create(['name' => PermissionsEnum::SuspendBusinesses->value]);
        $manageCategories = Permission::create(['name' => PermissionsEnum::ManageCategories->value]);
        $viewCategories = Permission::create(['name' => PermissionsEnum::ViewCategories->value]);
        $viewAllTransactions = Permission::create(['name' => PermissionsEnum::ViewAllTransactions->value]);
        $resolveDisputes = Permission::create(['name' => PermissionsEnum::ResolveDisputes->value]);
        $moderateContent = Permission::create(['name' => PermissionsEnum::ModerateContent->value]);
        $manageSubscriptions = Permission::create(['name' => PermissionsEnum::ManageSubscriptions->value]);
        $viewSubscriptions = Permission::create(['name' => PermissionsEnum::ViewSubscriptions->value]);
        $enableFeatureFlags = Permission::create(['name' => PermissionsEnum::EnableFeatureFlags->value]);
        $auditPlatformActivity = Permission::create(['name' => PermissionsEnum::AuditPlatformActivity->value]);
        $viewPlatformActivity = Permission::create(['name' => PermissionsEnum::ViewPlatformActivity->value]);
        $viewPlatformTransactions = Permission::create(['name' => PermissionsEnum::ViewPlatformTransactions->value]);
        $overseePayments = Permission::create(['name' => PermissionsEnum::OverseePayments->value]);
        $monitorReviews = Permission::create(['name' => PermissionsEnum::MonitorReviews->value]);
        $manageAdvertisements = Permission::create(['name' => PermissionsEnum::ManageAdvertisements->value]);
        $createBusiness = Permission::create(['name' => PermissionsEnum::CreateBusiness->value]);
        $browseListings = Permission::create(['name' => PermissionsEnum::BrowseListings->value]);
        $messageBusinesses = Permission::create(['name' => PermissionsEnum::MessageBusinesses->value]);
        $trackOrders = Permission::create(['name' => PermissionsEnum::TrackOrders->value]);
        $cancelOrders = Permission::create(['name' => PermissionsEnum::CancelOrders->value]);
        $requestRefunds = Permission::create(['name' => PermissionsEnum::RequestRefunds->value]);
        $favouriteBusinesses = Permission::create(['name' => PermissionsEnum::FavouriteBusinesses->value]);
        $requestServices = Permission::create(['name' => PermissionsEnum::RequestServices->value]);
        $makePayments = Permission::create(['name' => PermissionsEnum::MakePayments->value]);
        $leaveReviews = Permission::create(['name' => PermissionsEnum::LeaveReviews->value]);
        $reportIssues = Permission::create(['name' => PermissionsEnum::ReportIssues->value]);

        $userRole->syncPermissions([
            $buyProducts, $leaveReviews, $makePayments, $trackOrders, $cancelOrders,
            $requestRefunds, $favouriteBusinesses, $requestServices, $reportIssues, $browseListings, $messageBusinesses, $browseProducts,
        ]);
        $adminRole->syncPermissions([
            $approveVendors, $sellProducts, $approveBusinesses, $denyBusinesses, $suspendBusinesses, $manageCategories, $viewCategories, $viewAllTransactions,
            $resolveDisputes, $moderateContent, $manageSubscriptions, $viewSubscriptions, $enableFeatureFlags, $auditPlatformActivity, $viewPlatformActivity,
            $viewPlatformTransactions, $overseePayments, $monitorReviews, $manageAdvertisements
        ]);
        $vendorRole->syncPermissions([
            $sellProducts, $buyProducts, $buyProducts, $manageSubscriptions, $viewSubscriptions, $managePayments, $viewSubscriptions, $manageStorefront,
            $createBusiness, $manageStorefront, $editStorefront, $viewStorefront, $manageEmployees, $manageAdvertisements, $manageOrders, $viewOrders, $handleMessages,
            $viewMessages, $sendMessages, $accessAnalytics, $manageServices, $viewReviews, $respondReviews, $upgradeVisibility, $inviteEmployees,
            $managePayments, $requestPayouts
        ]);

    }
}
