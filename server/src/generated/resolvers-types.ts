import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from 'src/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** Used to create a post */
export type CreatePostInput = {
  /** The post's content */
  content: Scalars['String'];
  /** The thumbnail image for the post */
  photoThumbnail: Scalars['String'];
  /** The post's title */
  title: Scalars['String'];
};

/** Response after creating a post */
export type CreatePostResponse = MutationResponse & {
  __typename?: 'CreatePostResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** The newly created post */
  post?: Maybe<Post>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Guest = User & {
  __typename?: 'Guest';
  /** The user's email address */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** The user's first and last name */
  name?: Maybe<Scalars['String']>;
  /** The user's password */
  password: Scalars['String'];
};

export type Host = User & {
  __typename?: 'Host';
  /** The user's email address */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** The user's first and last name */
  name?: Maybe<Scalars['String']>;
  /** The user's password */
  password: Scalars['String'];
  /** The posts this host owns */
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new post */
  createPost: CreatePostResponse;
  /** Deletes user account */
  deleteUser: Scalars['Boolean'];
  /** Logs in an existing user and returns an auth token */
  login?: Maybe<Scalars['String']>;
  /** Creates a new user account */
  signup?: Maybe<Scalars['String']>;
  /** Updates a post */
  updatePost: UpdatePostResponse;
  /** Updates the logged-in user's profile information */
  updateProfile: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  updatePostInput?: InputMaybe<UpdatePostInput>;
};


export type MutationUpdateProfileArgs = {
  updateProfileInput?: InputMaybe<UpdateProfileInput>;
};

export type MutationResponse = {
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type PaginationResponse = {
  /** The cursor to the next page */
  cursor?: Maybe<Scalars['String']>;
  /** Indicates whether there are more pages */
  hasMore: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  /** The post's author */
  author?: Maybe<Host>;
  /** The post's content */
  content: Scalars['String'];
  /** The post's creation date */
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  /** The thumbnail image for the post */
  photoThumbnail: Scalars['String'];
  /** The post's title */
  title: Scalars['String'];
  /** The post's update date */
  updatedAt: Scalars['Date'];
};

export type PostsPaginationResponse = PaginationResponse & {
  __typename?: 'PostsPaginationResponse';
  /** The cursor to the next page */
  cursor?: Maybe<Scalars['String']>;
  /** Indicates whether there are more pages */
  hasMore: Scalars['Boolean'];
  /** The posts */
  posts: Array<Maybe<Post>>;
};

export type Query = {
  __typename?: 'Query';
  /** Return the posts that belong to the currently logged-in host */
  hostPosts: PostsPaginationResponse;
  me?: Maybe<User>;
  /** Returns the details about this post */
  post?: Maybe<Post>;
  /** Search results for posts that fit the criteria provided */
  searchPosts: PostsPaginationResponse;
  user: User;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryHostPostsArgs = {
  criteria?: InputMaybe<SearchPostsInput>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QuerySearchPostsArgs = {
  criteria?: InputMaybe<SearchPostsInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

/** To search for a post, you need these fields. */
export type SearchPostsInput = {
  /** The cursor to the next page */
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['ID']>;
  /** The page in the search results, defaults to 1 */
  page?: InputMaybe<Scalars['Int']>;
  /** The number of posts you can display in a page, defaults to 5 */
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Updates the properties included. If none are given, don't update anything */
export type UpdatePostInput = {
  /** The post's content */
  content?: InputMaybe<Scalars['String']>;
  /** The thumbnail image for the post */
  photoThumbnail?: InputMaybe<Scalars['String']>;
  /** The post's title */
  title?: InputMaybe<Scalars['String']>;
};

/** Response after updating a post */
export type UpdatePostResponse = MutationResponse & {
  __typename?: 'UpdatePostResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** The newly updated post */
  post?: Maybe<Post>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

/** Fields that can be updated */
export type UpdateProfileInput = {
  /** The user's first and last name */
  name?: InputMaybe<Scalars['String']>;
  /** The user's password */
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  /** The user's email address */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** The user's first and last name */
  name?: Maybe<Scalars['String']>;
  /** The user's password */
  password: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreatePostInput: CreatePostInput;
  CreatePostResponse: ResolverTypeWrapper<CreatePostResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Guest: ResolverTypeWrapper<Guest>;
  Host: ResolverTypeWrapper<Host>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolversTypes['CreatePostResponse'] | ResolversTypes['UpdatePostResponse'];
  PaginationResponse: ResolversTypes['PostsPaginationResponse'];
  Post: ResolverTypeWrapper<Post>;
  PostsPaginationResponse: ResolverTypeWrapper<PostsPaginationResponse>;
  Query: ResolverTypeWrapper<{}>;
  SearchPostsInput: SearchPostsInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdatePostInput: UpdatePostInput;
  UpdatePostResponse: ResolverTypeWrapper<UpdatePostResponse>;
  UpdateProfileInput: UpdateProfileInput;
  User: ResolversTypes['Guest'] | ResolversTypes['Host'];
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreatePostInput: CreatePostInput;
  CreatePostResponse: CreatePostResponse;
  Date: Scalars['Date'];
  Guest: Guest;
  Host: Host;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  MutationResponse: ResolversParentTypes['CreatePostResponse'] | ResolversParentTypes['UpdatePostResponse'];
  PaginationResponse: ResolversParentTypes['PostsPaginationResponse'];
  Post: Post;
  PostsPaginationResponse: PostsPaginationResponse;
  Query: {};
  SearchPostsInput: SearchPostsInput;
  String: Scalars['String'];
  UpdatePostInput: UpdatePostInput;
  UpdatePostResponse: UpdatePostResponse;
  UpdateProfileInput: UpdateProfileInput;
  User: ResolversParentTypes['Guest'] | ResolversParentTypes['Host'];
}>;

export type CreatePostResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreatePostResponse'] = ResolversParentTypes['CreatePostResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GuestResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Guest'] = ResolversParentTypes['Guest']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Host'] = ResolversParentTypes['Host']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createPost?: Resolver<ResolversTypes['CreatePostResponse'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'createPostInput'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  signup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'password'>>;
  updatePost?: Resolver<ResolversTypes['UpdatePostResponse'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id'>>;
  updateProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationUpdateProfileArgs>>;
}>;

export type MutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreatePostResponse' | 'UpdatePostResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type PaginationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaginationResponse'] = ResolversParentTypes['PaginationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PostsPaginationResponse', ParentType, ContextType>;
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['Host']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photoThumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostsPaginationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PostsPaginationResponse'] = ResolversParentTypes['PostsPaginationResponse']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  hostPosts?: Resolver<ResolversTypes['PostsPaginationResponse'], ParentType, ContextType, Partial<QueryHostPostsArgs>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  searchPosts?: Resolver<ResolversTypes['PostsPaginationResponse'], ParentType, ContextType, Partial<QuerySearchPostsArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type UpdatePostResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdatePostResponse'] = ResolversParentTypes['UpdatePostResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Guest' | 'Host', ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Guest?: GuestResolvers<ContextType>;
  Host?: HostResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  PaginationResponse?: PaginationResponseResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostsPaginationResponse?: PostsPaginationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdatePostResponse?: UpdatePostResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

