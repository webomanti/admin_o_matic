<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <inertia-link :href="route('dashboard.index')" class="brand-link">
            <img :src="'/images/AdminLTELogo.png'" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE</span>
        </inertia-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="'/images/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">{{ $page.props.user.name }}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <inertia-link :href="route('dashboard.index')" class="nav-link" :class="route().current('dashboard.*') ? 'active' : ' '">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                {{ $t('dashboard') }}
                            </p>
                        </inertia-link>
                    </li>
                    <li class="nav-item has-treeview" :class="route().current('admin.*') ? ' menu-is-opening menu-open' : ' '">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                {{ $t('tables') }}
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item" v-if="$page.props.auth.hasRole.superAdmin || $page.props.auth.hasRole.admin || $page.props.auth.hasRole.moderator || $page.props.auth.hasRole.developer">
                                <inertia-link :href="route('admin.admins.index')" class="nav-link ml-2" :class="route().current('admin.admins.*') ? 'active' : ' '">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>
                                        {{ $t('admins') }}
                                    </p>
                                </inertia-link>
                            </li>
                            <li class="nav-item" v-if="$page.props.auth.hasRole.superAdmin || $page.props.auth.hasRole.admin || $page.props.auth.hasRole.moderator">
                                <inertia-link :href="route('admin.users.index')" class="nav-link ml-2" :class="route().current('admin.users.*') ? 'active' : ' '">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>
                                        {{ $t('users') }}
                                    </p>
                                </inertia-link>
                            </li>
                            <li class="nav-item" v-if="$page.props.auth.hasRole.superAdmin || $page.props.auth.hasRole.admin || $page.props.auth.hasRole.moderator">
                                <inertia-link :href="route('admin.roles.index')" class="nav-link ml-2" :class="route().current('admin.roles.*') ? 'active' : ' '">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>
                                        {{ $t('roles') }}
                                    </p>
                                </inertia-link>
                            </li>
                            <li class="nav-item" v-if="$page.props.auth.hasRole.superAdmin || $page.props.auth.hasRole.admin">
                                <inertia-link :href="route('admin.permissions.index')" class="nav-link ml-2" :class="route().current('admin.permissions.*') ? 'active' : ' '">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>
                                        {{ $t('permissions') }}
                                    </p>
                                </inertia-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
    export default {
        methods: {
            logout() {
                this.$inertia.post(route('logout'));
            },
        }
    }
</script>
