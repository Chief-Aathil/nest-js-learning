import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: './src/core/graphql/graphql.schema.ts',
            },
            context: ({ req, res }) => ({ headers: req.headers, res, req }),
            path: '/graphql',
        }),
    ],
})
export class AppGraphQLModule {}