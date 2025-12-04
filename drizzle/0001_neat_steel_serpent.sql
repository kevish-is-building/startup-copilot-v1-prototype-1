CREATE TABLE `blueprints` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`startup_id` integer NOT NULL,
	`content` text NOT NULL,
	`generated_at` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`startup_id`) REFERENCES `startups`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `founding_team` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`startup_id` integer NOT NULL,
	`name` text NOT NULL,
	`skills` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`startup_id`) REFERENCES `startups`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `startups` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`full_name` text NOT NULL,
	`startup_name` text NOT NULL,
	`industry` text NOT NULL,
	`stage` text NOT NULL,
	`founder_count` integer NOT NULL,
	`domain_purchased` integer DEFAULT false,
	`trademark_completed` integer DEFAULT false,
	`entity_registered` integer DEFAULT false,
	`goals` text NOT NULL,
	`onboarding_completed` integer DEFAULT false,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
