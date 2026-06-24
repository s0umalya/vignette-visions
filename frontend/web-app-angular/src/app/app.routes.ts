import { Routes } from '@angular/router';

import { PublicLayoutComponent } from './core/layouts/public-layout/public-layout.component';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';

import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { GalleryPageComponent } from './features/gallery/pages/gallery-page/gallery-page.component';
import { CollectionsPageComponent } from './features/collections/pages/collections-page/collections-page.component';
import { AboutPageComponent } from './features/about/pages/about-page/about-page.component';
import { WishlistPageComponent } from './features/wishlist/pages/wishlist-page/wishlist-page.component';
import { CollectionDetailsPageComponent } from './features/collections/pages/collection-details-page/collection-details-page.component';
import { AdminDashboardPageComponent } from './features/admin/pages/admin-dashboard-page/admin-dashboard-page.component';
import { SignInPageComponent } from './features/auth/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './features/auth/pages/sign-up-page/sign-up-page.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,

        children: [
            {
                path: '',
                component: HomePageComponent,
            },

            {
                path: 'gallery',
                component: GalleryPageComponent,
            },

            {
                path: 'collections',
                component: CollectionsPageComponent
            },
            {
                path: 'collections/:id',
                component: CollectionDetailsPageComponent
            },

            {
                path: 'about',
                component: AboutPageComponent,
            },

            {
                path: 'wishlist',
                component: WishlistPageComponent,
                canActivate: [authGuard]
            },

            // {
            //     path: 'cart',
                // component: CartPageComponent,
            //     canActivate: [authGuard]
            // },
            {
                path: 'sign-in',
                component: SignInPageComponent,
                canActivate: [guestGuard]
            },
            {
                path: 'sign-up',
                component: SignUpPageComponent,
                canActivate: [guestGuard]
            }
        ],
    },

    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'admin',
                component: AdminDashboardPageComponent
            },
        ],
    },
];