<template>
    <header>
        <nav>
            <ul class="flex items-center justify-center gap-10">
                <li>
                    <RouterLink to="/">Home</RouterLink> 
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink> 
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink> 
                </li>
            </ul>
        </nav>
    </header>
    <main class="h-screen">
        <slot />
    </main>
    <footer>
        <p class="text-center py-10 text-2xl text-white bg-primary">Footer</p>
    </footer>
</template>